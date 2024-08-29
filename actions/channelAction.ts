"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const getAllData = async () => {
  try {
    const req = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/channels");

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getChannelByUserId = async () => {
  const user = await currentUser();

  try {
    const req = await fetch(
      process.env.API_BASE_URL + "/channels/user/" + user?.id
    );

    if (req.ok) {
      const res = await req.json();

      return res;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

type createValue = {
  name: string;
  description: string;
  image: string;
  user_id?: string;
};

export const createChannels = async (values: createValue) => {
  const user = await currentUser();
  const data = values;
  data.user_id = user?.id;

  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/channels",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (req.ok) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err);
    return null;
  }
};
