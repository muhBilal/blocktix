"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import { useParams } from "next/navigation";
import ChatComponent from "@/components/ChatComponent";
import FallbackLoading from "@/components/Loading";
import { getCurrentUser } from "@/actions/userActions";
import { StreamChat } from "stream-chat";
import { User } from "@clerk/nextjs/server";
import { createToken } from "@/lib/stream";

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>();

  const getData = async () => {
    const getUser = await getCurrentUser();
    setUser(getUser);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <div className="mt-40">
        {user ? (
          <ChatComponent
            apiKey=""
            image={user.imageUrl}
            userId={user.id}
            userName={user.firstName ?? ""}
            createToken={createToken}
          />
        ) : (
          <FallbackLoading />
        )}
      </div>
    </Wrapper>
  );
};

export default Page;
