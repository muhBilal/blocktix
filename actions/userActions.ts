"use server";

import { db } from "@/lib/db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { users_role } from "@prisma/client";
import { redirect } from "next/navigation";

type UserData = {
  id: string;
  name: string | null;
  email: string;
  image: string;
  role: users_role | undefined;
};

const insertUser = async ({ id, name, email, image, role }: UserData) => {
  try {
    await db.users.create({
      data: {
        id,
        email,
        name,
        role,
        image,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const getUserFromDB = await db.users.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!getUserFromDB) {
    let role: users_role = "USER";

    if (
      user.emailAddresses &&
      user.emailAddresses.length > 0 &&
      user.emailAddresses[0].emailAddress ===
        "22081010099@student.upnjatim.ac.id"
    ) {
      role = "ADMIN";
    }

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        role,
      },
    });

    const data: UserData = {
      id: user.id,
      name: user.fullName,
      email: user.emailAddresses[0]?.emailAddress,
      image: user.imageUrl,
      role,
    };

    await insertUser(data);
  }

  if (user.privateMetadata.role === "ADMIN") {
    return redirect("/admin");
  }
};
