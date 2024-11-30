"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Clock, LayoutGrid, MapPin, Tag, UserRound } from "lucide-react";
import { formatDate, formatPrice } from "@/lib/format";
import Link from "next/link";
import { Button } from "./ui/button";
import { getAllData } from "@/actions/eventAction";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const SliderComponent = () => {
  const [events, setEvents] = useState<any[]>([]);

  const getData = async () => {
    const data = await getAllData();

    setEvents(data?.events);
  };

  useEffect(() => {
    getData();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {events?.map((event) => (
          <CarouselItem key={event.id} className="md:basis-1/3">
            <Card className="group hover:border-primary transition-all duration-300">
              <div className="relative w-full h-[300px]">
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
              <CardHeader>
                <div className="flex flex-col gap-4 mb-5">
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center text-muted-foreground">
                      <UserRound className="w-4 h-4" />
                      <p className="text-xs">{event.categories?.name}</p>
                    </div>
                    <div className="flex gap-1 items-center text-muted-foreground">
                      <LayoutGrid className="w-4 h-4" />
                      <p className="text-xs">{event.tags?.name}</p>
                    </div>
                    <div className="flex gap-1 items-center text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <p className="text-xs">
                        {event.is_online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <p className="text-xs">
                        {event.event_date && formatDate(event.event_date)}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center text-muted-foreground">
                      <Tag className="w-4 h-4" />
                      <p className="text-xs">
                        {event.is_paid ? formatPrice(event.price) : "Gratis"}
                      </p>
                    </div>
                  </div>
                </div>
                <CardTitle>
                  <Link
                    href={"/events/" + event.id}
                    className="hover:text-primary"
                  >
                    {event.name.length > 18
                      ? event.name.slice(0, 18) + "..."
                      : event.name}
                  </Link>
                </CardTitle>
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
                <div className="flex gap-2 ms-auto">
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SliderComponent;
