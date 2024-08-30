"use client";
import { getChannelByUserId } from "@/actions/channelAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Loading from "@/components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { events, follows, users } from "@prisma/client";
import { Plus, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Channel", link: "/users/channels" },
];

type ChannelUser = {
  id: string;
  image: string;
  name: string | null;
  description: string | null;
  users: users | null;
  events: events[] | null;
  follows: follows[] | null;
};

export default function Page() {
  const [channels, setChannels] = useState<ChannelUser | null>();
  const getData = async () => {
    const req = await getChannelByUserId();
    console.log(req);
    setChannels(req);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <Breadcrumbs items={breadcrumbItems} />
          {channels ? (
            <>
              <div className="relative h-[300px]">
                <Image
                  src={channels.image || ""}
                  fill
                  alt="background"
                  sizes="100%"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mt-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-40 h-40">
                      <AvatarImage src={channels.users?.image || ""} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-2xl">{channels.name}</h3>
                      <div className="flex gap-2">
                        <p className="text-muted-foreground text-sm">
                          {channels.users?.name}
                        </p>
                        <p className="text-muted-foreground text-sm">|</p>
                        <p className="text-muted-foreground text-sm">
                          {channels.follows?.length ?? 0} Followers
                        </p>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {channels.events?.length ?? 0} Event
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={"/users/channels/events/create"}
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          className: "text-primary",
                        })
                      )}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Tambah Event
                    </Link>
                    <Link
                      href={"/users/channels/update/" + channels.id}
                      className={cn(buttonVariants({ variant: "default" }))}
                    >
                      <UserRoundPen className="mr-2 h-4 w-4" /> Edit Channel
                    </Link>
                  </div>
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
                    {channels.events?.map((event, index: number) => (
                      <Card
                        key={index}
                        className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                      >
                        <Image
                          src={event.image || ""}
                          alt="image"
                          width={600}
                          height={600}
                          loading="lazy"
                          className="object-contain rounded-t-lg"
                        />
                        <CardHeader>
                          <CardTitle>{event.name}</CardTitle>
                          <CardDescription className="max-w-lg">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: event.description
                                  ? event.description.length > 100
                                    ? `${event.description.slice(0, 100)}...`
                                    : event.description
                                  : "",
                              }}
                            />
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <div className="ms-auto">
                            <Link href={"/browse/" + event.id}>
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
                      __html: channels.description || "",
                    }}
                  />
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="border-2 border-dotted rounded-lg mt-10 h-[200px] flex justify-center items-center">
              <Link
                href={"/users/channels/create"}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                <Plus className="mr-2 h-4 w-4" /> Buat Channel
              </Link>
            </div>
          )}
        </div>
      </ScrollArea>
    </Suspense>
  );
}
