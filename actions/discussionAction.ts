"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

export const initUser = async () => {
  const user = await currentUser();

  if (user) {
    // await
  }
};
