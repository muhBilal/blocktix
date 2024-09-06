"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getChannelById } from "@/actions/channelAction";
import { Plus } from "lucide-react";
import FallbackLoading from "@/components/Loading";
import toast from "react-hot-toast";
import { followChannel } from "@/actions/followAction";

type UserType = {
  id: string;
  name: string;
  image: string;
};

type EventType = {
  id: string;
  name: string;
  image: string;
  description: string;
};

type ChannelType = {
  id: string;
  name: string;
  description: string;
  image: string;
  users?: UserType;
  _count?: {
    follows: number;
    events: number;
  };
  events?: EventType[];
};

export default function Page({ params }: { params: { id: string } }) {
  const [channels, setChannels] = useState<ChannelType>();

  const [isFollowing, setIsFollowing] = useState(false);

  const getChannelDetail = async () => {
    const data = await getChannelById(params.id);
    setChannels(data);
    console.log(data);
    setIsFollowing(data?.isFollowing || false);
  };

  const handleFollowChannel = async () => {
    try {
      await followChannel(params.id);
      setIsFollowing(true);
      toast.success("Berhasil mengikuti channel");
    } catch (error) {
      toast.error("Gagal mengikuti channel");
    }
  };

  useEffect(() => {
    getChannelDetail();
  }, []);
  return (
    <Wrapper>
      <div className="mt-40">
        {channels ? (
          <>
            <div className="relative h-[300px]">
              <Image
                src={channels?.image || ""}
                fill
                alt="background"
                sizes="100%"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-10 mb-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      // src={
                      //   channels?.users?.image ?? "https://github.com/shadcn.png"
                      // }
                      src={"https://github.com/shadcn.png"}
                      fill
                      sizes="100%"
                      alt="avatar"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">{channels?.users?.name}</p>
                  </div>
                </div>
                <Button
                  variant={isFollowing ? "secondary" : "primary"} // Ubah varian berdasarkan status
                  className={`${
                    isFollowing
                      ? "bg-gray-500 text-white" // Ganti warna abu-abu jika sudah diikuti
                      : "hover:text-primary"
                  }`}
                  onClick={handleFollowChannel} // Panggil fungsi handleFollowChannel saat diklik
                  disabled={isFollowing} // Disable tombol jika sudah diikuti
                >
                  {isFollowing ? "Diikuti" : "Ikuti Channel"}
                </Button>
              </div>
            </div>
            <Separator />
            <Tabs defaultValue="events" className="space-y-4">
              <TabsList>
                <TabsTrigger value="events">Daftar Event</TabsTrigger>
                <TabsTrigger value="description">Deskripsi</TabsTrigger>
              </TabsList>
              <TabsContent value="events" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {channels?.events?.map((event, index: number) => (
                    <Card
                      key={index}
                      className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                    >
                      <Link href={"/events/" + event.id}>
                        <div className="relative w-full h-[200px]">
                          <Image
                            src={event.image || ""}
                            alt="image"
                            width={0}
                            height={0}
                            fill
                            sizes="100%"
                            loading="lazy"
                            className="object-cover w-full h-full rounded-t-lg"
                          />
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle>
                          <Link
                            href={"/events/" + event.id}
                            className="hover:text-primary"
                          >
                            {event.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="max-w-lg">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: event.description,
                            }}
                          />
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <div className="ms-auto">
                          <Link href={"/events/" + event.id}>
                            <Button
                              variant={"secondary"}
                              className="hover:text-primary transition-all duration-300"
                            >
                              Lihat detail
                            </Button>
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="description" className="space-y-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: channels?.description || "",
                  }}
                />
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <FallbackLoading />
        )}
      </div>
    </Wrapper>
  );
}
