"use server";

import { currentUser } from "@clerk/nextjs/server";

export const getAllData = async () => {
  const user = await currentUser();
  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + `/users/${user?.id}/favorites`
    );

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
