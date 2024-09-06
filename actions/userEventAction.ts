"use server";

import { currentUser } from "@clerk/nextjs/server";

export const getAllData = async () => {
  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/user_events"
    );

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const joinEvent = async (event_id: string) => {
  const user = await currentUser();

  if (user) {
  } else {
    return null;
  }
};
