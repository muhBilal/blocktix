"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, FileClock, LayoutGrid, Tag } from "lucide-react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getUserDashboardData } from "@/actions/userActions";
import { channels, events, tags, users } from "@prisma/client";
import Loading from "@/components/Loading";
import { formatDate, formatPrice } from "@/lib/format";

type EventType = {
  id: string;
  name: string;
  image: string;
  description: string;
  event_date: Date;
  price: number;
  tags: tags;
  channels: channels;
};

type UserEventType = {
  id: string;
  events: EventType;
  users: users;
};

type ChannelType = {
  id: string;
  name: string;
  image: string;
  description: string;
  created_at: Date;
  users: users;
};

type FavoriteType = {
  id: string;
  events: events;
};

type DashboardType = {
  user_events: UserEventType[];
  channels: ChannelType[];
  favorites: FavoriteType[];
};

const LoadingFallback = () => {
  return (
    <div className="mt-48 flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default function Page() {
  const { user } = useUser();
  const [dashboard, setDashboard] = useState<DashboardType>({
    user_events: [],
    channels: [],
    favorites: [],
  });

  const getDashboardData = async () => {
    const dashboardData = await getUserDashboardData();
    setDashboard(dashboardData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back{" "}
            <span className="text-primary">{user?.firstName}</span> 👋
          </h2>
          <Link
            href={"/users/channels"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Kelola Channel
          </Link>
        </div>
        <Separator />
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="text-primary">Event yang pernah diikuti</div>
            <Link href={"/users/history-events"}>
              <Button variant={"secondary"} className="hover:text-primary">
                Lihat semua
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-5">
              {dashboard?.user_events?.map((item, index) => (
                <Card
                  key={index}
                  className="hover:-translate-y-3 hover:border-primary transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-4 p-2">
                    <Image
                      src={item.events.image || ""}
                      alt="events"
                      width={300}
                      height={300}
                      className="object-cover border border-muted rounded-md"
                    />
                    <div className="flex flex-col gap-2 w-full">
                      <CardTitle>{item.events.name}</CardTitle>
                      <CardDescription>
                        Diadakan oleh{" "}
                        <Link
                          href={"/channels/" + item.events.channels.id}
                          className="text-primary"
                        >
                          {item.events.channels.name}
                        </Link>
                      </CardDescription>
                      <div className="flex gap-4">
                        <div className="flex gap-2 items-center text-muted-foreground">
                          <Clock />
                          <p className="text-xs">
                            {item.events.event_date &&
                              formatDate(item.events.event_date)}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex gap-2 items-center text-muted-foreground">
                          <LayoutGrid />
                          <p className="text-xs">{item.events.tags.name}</p>
                        </div>
                        <div className="flex gap-2 items-center text-muted-foreground">
                          <Tag />
                          <p className="text-xs">
                            {formatPrice(item.events.price ?? 0)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div
                          className="text-sm text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: item.events.description || "",
                          }}
                        />
                      </div>
                      <div className="mt-3 ms-auto">
                        <Link href={"/browse/" + item.events.id}>
                          <Button
                            variant={"secondary"}
                            className="hover:text-primary transition-all duration-300"
                          >
                            Lihat detail
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="text-primary">Channel yang diikuti</div>
            <Link href={"/users/following"}>
              <Button variant={"secondary"} className="hover:text-primary">
                Lihat semua
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {dashboard?.channels?.map((item, index) => (
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
        </div>
        <Separator />
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="text-primary">Event Favorite</div>
            <Link href={"/users/favorites"}>
              <Button variant={"secondary"} className="hover:text-primary">
                Lihat semua
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {dashboard?.favorites?.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                >
                  <Image
                    src={item.events.image || ""}
                    alt="image"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{item.events.name}</CardTitle>
                    <CardDescription className="max-w-lg">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.events.description || "",
                        }}
                      />
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="ms-auto">
                      <Link href={"/browse/" + item.events.id}>
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
        </div>
      </div>
    </ScrollArea>
  );
}
