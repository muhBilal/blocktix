"use server";

import { currentUser } from "@clerk/nextjs/server";

export const getAllData = async () => {
  try {
    const req = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/events");

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

type createValues = {
  name: string;
  description: string;
  image: string;
  tag_id: string;
  category_id: string;
  location: string;
  link_group: string;
  price: number;
  event_date: Date;
  user_id?: string;
};

export const createEvents = async (values: createValues) => {
  const user = await currentUser();
  const data = values;
  data.user_id = user?.id;
  try {
    const req = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (req.ok) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err);
    return null;
  }
};
