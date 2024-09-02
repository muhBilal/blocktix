"use server";
import { currentUser } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

// export const init = async () => {
//   const user = await currentUser();
//   const apiKey = process.env.API_KEY;
//   const secret = process.env.STREAM_SECRET;

//   if (!apiKey) throw new Error("API key not found");
//   if (!secret) throw new Error("Secret not found");
//   if (!user) throw new Error("User not found");

//   const client = StreamChat.getInstance(apiKey);

//   await client.connectUser(
//     {
//       id: user.id,
//       name: user.firstName ?? "",
//       image: user.imageUrl ?? "https://i.imgur.com/fR9Jz14.png",
//     },
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGl0dGxlLWtpbmctNSJ9.zltepBdnGyefFZXvOK7y86PxXL4eUyeEZ4MbDv1bUOw"
//   );
// };

export async function generateToken(): Promise<string> {
  const user = await currentUser();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const secret = process.env.NEXT_PUBLIC_STREAM_SECRET_KEY;

  if (!apiKey) throw new Error("API key not found");
  if (!secret) throw new Error("Secret not found");
  if (!user) throw new Error("User not found");

  const serverClient = new StreamChat(apiKey, secret);
  return serverClient.createToken(user.id);
}

export const createChatClient = async () => {};

// export const createChannel = async (event_id: string) => {
//   const channel = client.channel("messaging", "travel", {
//     name: "Awesome channel about traveling",
//   });
//   // Here, 'travel' will be the channel ID
//   await channel.create();
// };
