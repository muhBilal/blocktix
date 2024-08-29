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

export const getEventById = async (event_id: string) => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${event_id}`,
      {
        method: "GET",
      }
    );

    // Cek status respon
    if (!req.ok) {
      console.error(`Failed to fetch event. Status: ${req.status}`);
      return null;
    }

    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
};

export const searchEventByTitle = async (title: string) => {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/events/?name=${encodeURIComponent(title)}`
    );
    if (response.ok) {
      const results = await response.json();
      return results;
    } else {
      throw new Error("Failed to search events");
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
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
