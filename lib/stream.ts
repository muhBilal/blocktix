import { StreamChat } from "stream-chat";

const key = process.env.STREAM_API_KEY || "";
export const chatClient = StreamChat.getInstance(key);
