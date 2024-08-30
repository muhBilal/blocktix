"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import Loading from "@/components/Loading";

const LoadingFallback = () => {
  return (
    <Wrapper>
      <div className="mt-48 flex items-center justify-center">
        <Loading />
      </div>
    </Wrapper>
  );
};

export default function Page() {
  const apiKey = "your-api-key";
  const userId = "user-id";
  const token = "authentication-token";

  const filters = { members: { $in: [userId] }, type: "messaging" };
  const options = { presence: true, state: true };
  const sort = { last_message_at: -1 };
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId },
  });

  if (!client) return <LoadingFallback />;
  return (
    <Wrapper>
      <Chat client={client}>
        <ChannelList filters={filters} options={options} />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </Wrapper>
  );
}
