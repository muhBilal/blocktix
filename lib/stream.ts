"use server";
import { StreamChat } from "stream-chat";

export async function createToken(userId: string): Promise<string> {
  "use server";

  const apiKey = process.env.API_KEY;
  const secret = process.env.STREAM_SECRET;

  if (!apiKey) throw new Error("API key not found");
  if (!secret) throw new Error("Secret not found");

  const serverClient = new StreamChat(apiKey, secret);
  return serverClient.createToken(userId);
}
