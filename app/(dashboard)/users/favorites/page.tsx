"use client";
import { getAllData } from "@/actions/favoriteAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { favorites } from "@prisma/client";
import { Clock, LayoutGrid, Plus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Favorites", link: "/users/favorites" },
];

type EventType = {
  id: string;
  name: string;
  image: string;
  description: string;
};

type FavoriteType = {
  id: string;
  events: EventType;
};

export default function Page() {
  const [favorites, setFavorites] = useState<FavoriteType[]>();
  const getData = async () => {
    const req = await getAllData();
    setFavorites(req);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading
          title={`Event yang disukai (${favorites?.length ?? 0})`}
          description="Daftar berbagai event akademik yang disukai"
        />
        <Separator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {favorites?.map((item, index: number) => (
            <Card
              key={index}
              className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
            >
              <Image
                src={item.events.image}
                alt="image"
                width={600}
                height={600}
                loading="lazy"
                className="object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{item.events.name}</CardTitle>
                <CardDescription className="max-w-lg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.events.description,
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
    </ScrollArea>
  );
}
