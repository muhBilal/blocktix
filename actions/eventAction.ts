"use server";

import { db } from "@/lib/db";
import { sendEventCreatedEmail } from "@/lib/mail";
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
    return data;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
};

export const eventVerification = async (event_id: string) => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${event_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "ONGOING" }),
      }
    );
    if (!req.ok) {
      console.error(`Failed to fetch event. Status: ${req.status}`);
      return null;
    }

    return true;
  } catch (err) {
    console.log(err);
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

const getSpesificChannelByUserId = async (user_id: string) => {
  try {
    const channel = await db.channels.findFirst({
      where: {
        user_id,
      },
    });

    return channel;
  } catch (err) {
    console.log(err);
    return null;
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
  channel_id?: string;
  is_paid: boolean | null;
  post_duration: number;
};

export const createEvents = async (values: createValues) => {
  const user = await currentUser();
  const totalPayment = values.post_duration * 1000;

  if (user && user.privateMetadata.role === "USER") {
    const getChannelId = await getSpesificChannelByUserId(user.id);
    if (getChannelId) {
      values.channel_id = getChannelId.id;
      try {
        const req = await fetch(
          process.env.NEXT_PUBLIC_API_BASE_URL + "/events",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (req.ok) {
          await sendEventCreatedEmail(
            user?.emailAddresses[0].emailAddress,
            user?.firstName,
            totalPayment
          );
          return true;
        }

        return false;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  }

  return null;
};

export type EventType = {
  id: string;
  name: string;
  description: string;
  location: string;
  event_date: string;
  image: string;
  categories?: {
    id: string;
    name: string;
  };
  tags?: {
    id: string;
    name: string;
  };
};

export const filterEvents = async (
  category: string | null,
  tag: string | null,
  is_paid: boolean | null,
  search: string | null
) => {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`);

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getHistoryUserEvent = async () => {
  const user = await currentUser();

  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        `/users/${user?.id}/event-histories`
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
