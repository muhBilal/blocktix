"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CornerUpRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { getEventById } from "@/actions/eventAction";
import { channels, events } from "@prisma/client";
import { formatDate, formatPrice } from "@/lib/format";

type Event = {
  channels: channels;
  name: string;
  description: string;
  similar_event: events[];
  event_date: string;
};

type EventType = {
  id: string;
  name: string;
  description: string;
  event_date: string;
  image: string;
  location: string;
  price: number;
  channels: {
    id: string;
    name: string;
    image: string;
    phone: string;
  };
  similar_event?: Array<{
    id: string;
    name: string;
    event_date: string;
    image: string;
  }>;
};

export default function Page({ params }: { params: { id: string } }) {
  const [events, setEvents] = useState<EventType>();
  const [isFollowing, setIsFollowing] = useState(false);
  const getEventDetail = async () => {
    const data = await getEventById(params.id);
    setEvents(data);
  };

  useEffect(() => {
    getEventDetail();
  }, []);

  const handleFollowEvent = () => {
    setIsFollowing(!isFollowing); // Ubah status mengikuti atau tidak
  };

  const formatDateIndonesian = (dateString: string): string => {
    const date = new Date(dateString);

    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Wrapper>
      <div className="mt-40">
        <div className="relative h-[500px] mb-10">
          <Image
            src={events?.image || ""}
            alt="Poster dummy"
            fill
            sizes="100%"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="mt-10 mb-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={
                    events?.channels.image ?? "https://github.com/shadcn.png"
                  }
                  fill
                  sizes="100%"
                  alt="avatar"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href={"/channels/" + events?.channels.id}
                  className="font-bold text-xl hover:text-primary"
                >
                  {events?.channels?.name}
                </Link>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant={"secondary"} className="hover:text-primary">
                Ruang Diskusi
              </Button>
              <Button
                onClick={handleFollowEvent}
                className={isFollowing ? "bg-green-500" : "bg-blue-500"}
              >
                {isFollowing ? "Event Diikuti" : "Ikuti Event"}
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 ">
            <Tabs defaultValue="events" className="space-y-4">
              <TabsList>
                <TabsTrigger value="events">Deskripsi</TabsTrigger>
                <TabsTrigger value="description">Informasi</TabsTrigger>
                <TabsTrigger value="contact">Kontak</TabsTrigger>
              </TabsList>
              <TabsContent value="events" className="space-y-4">
                <h2 className="font-bold text-3xl">{events?.name}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: events?.description ?? "",
                  }}
                />
                <Button
                  onClick={handleFollowEvent}
                  className={isFollowing ? "bg-green-500" : "bg-blue-500"}
                >
                  {isFollowing ? "Event Diikuti" : "Ikuti Event"}
                </Button>
              </TabsContent>
              <TabsContent value="description" className="space-y-4">
                <h2 className="font-semibold text-3xl">Detail Acara</h2>
                <p>Tanggal Pelaksanaan: {formatDate(events?.event_date)}</p>
                <p>Lokasi Acara: {events?.location}</p>
                <p>
                  Harga Acara:{" "}
                  {events?.price == 0 ? "Gratis" : formatPrice(events?.price)}
                </p>
              </TabsContent>
              <TabsContent value="contact" className="space-y-4">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-3xl mb-8">
                    Hubungi Penyelenggara Acara
                  </h2>
                  <div className="border border-slate-200 p-6 rounded-lg mb-8">
                    <div className="flex items-center mb-8">
                      <Image
                        src={events?.channels.image ?? ""}
                        width={50}
                        height={50}
                        alt="logo"
                        className="mr-4"
                      ></Image>
                      <h2 className="text-semibold text-3xl">
                        {events?.channels.name}
                      </h2>
                    </div>
                    <Separator className="mb-8" />
                    <div className="flex flex-col text-xl gap-5 ml-5">
                      <div>
                        <h5>No. Telepon</h5>
                        <p className="font-semibold">
                          {events?.channels.phone}
                        </p>
                      </div>
                      <div>
                        <h5>Alamat Email</h5>
                        <p className="font-semibold">example.emaildotcom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <div className=" flex items-center justify-start bg-primary rounded-lg mt-5">
              <div className="relative h-[150px] p-3 mr-5">
                <GraduationCap className="w-full h-full text-white" />
              </div>
              <div className="flex flex-col items-start mr-10">
                <h4 className="text-2xl font-bold text-white">
                  Tidak tertarik dengan event ini ?
                </h4>
                <p className="text-2xl font-medium text-white">
                  Lihat event lainnya
                </p>
              </div>
              <div className="relative h-[45px] ml-auto mr-10">
                <Link href="/browse">
                  <CornerUpRight className="w-full h-full text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-semibold text-3xl mt-14 mb-5">Acara Serupa</h2>
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-10">
              {events?.similar_event?.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                  <Link href={`/browse/${event.id}`}>
                    <Image
                      src={event.image}
                      alt="gambar event lain"
                      width={224}
                      height={224}
                      className="w-full object-cover"
                    />
                  </Link>

                  <div className="bg-white p-4 sm:p-6">
                    <p className="block test-xs text-gray-500">
                      {formatDateIndonesian(event?.event_date)}
                    </p>

                    <Link href={`/browse/${event.id}`}>
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        {event.name}
                      </h3>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
