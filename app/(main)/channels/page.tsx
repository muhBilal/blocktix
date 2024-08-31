"use client";

import React from "react";
import Wrapper from "@/components/Wrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllData, searchChannelByName } from "@/actions/channelAction";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/format";
import CountUp from "react-countup";
import { Input } from "@/components/ui/input";

type UserType = {
  id: string;
  name: string;
};

type ChannelType = {
  id: string;
  name: string;
  description: string;
  image: string;
  created_at: Date;
  users: UserType;
};

export default function Page() {
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const [results, setResults] = useState<ChannelType[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [followedChannels, setFollowedChannels] = useState<string[]>([]);

  const getData = async () => {
    const channelAction = await getAllData();
    setChannels(channelAction);
  };

  const handleSearch = async () => {
    setIsSearching(true);
    if (query.trim()) {
      const data = await searchChannelByName(query);
      setResults(data);
    } else {
      setResults(channels);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <main className="pt-40">
        <div className="flex flex-col items-center gap-5 px-10 md:px-36 py-16 lg:px-44 lg:py-16 bg-blue-50 dark:bg-blue-800/10 rounded-lg relative">
          <Image
            src={"/undraw_globe.svg"}
            alt="icon-chart"
            width={210}
            height={210}
            className="absolute bottom-0 left-0 ml-7"
          />
          <Image
            src={"/undraw_welcoming.svg"}
            alt="icon-search"
            width={180}
            height={180}
            className="absolute right-0 bottom-0 mr-5"
          />
          <h1 className="text-4xl text-center font-semibold">
            <CountUp end={200} className="text-primary" /> Channel Akademik Yang
            Aktif
          </h1>
          <p className="text-muted-foreground max-w-lg text-center">
            Temukan dan ikuti berbagai channel terpercaya yang menyediakan
            beragam event untuk mendukung perjalanan belajar dan pengembangan
            diri Anda dengan informasi yang selalu up-to-date.
          </p>
          <div className="max-w-2xl z-10 w-full bg-muted dark:bg-transparent border-2 dark:border border-secondary dark:border-primary grid grid-cols-12 gap-4 rounded-lg mt-10 shadow-xl">
            <div className="lg:col-span-9 col-span-12 p-2 flex items-center">
              <Input
                type="text"
                placeholder="cari nama channel..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-lg border-none bg-transparent focus-visible::outline-none focus-visible::border-none focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
            </div>
            <div className="lg:col-span-3 col-span-12 p-2">
              <Button
                onClick={() => handleSearch()}
                className="w-full h-full p-4 text-lg text-white"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {channels?.map((item, index) => (
              <Card
                key={index}
                className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
              >
                <CardHeader>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <Image
                      src={item.image || ""}
                      alt="image"
                      width={500}
                      height={500}
                      loading="lazy"
                      className="object-cover rounded"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-xl">{item.users.name}</h3>
                      <p className="text-muted-foreground text-xs">
                        since {formatDate(item.created_at)}
                      </p>
                    </div>
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="max-w-lg">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="ms-auto">
                    <Link href={"/channels/" + item.id}>
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
        </div>
      </main>
    </Wrapper>
  );
}
