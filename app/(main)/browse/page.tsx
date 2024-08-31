"use client";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import {
  BookmarkCheck,
  Clock,
  TagIcon,
  GanttChartSquare,
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllData, searchEventByTitle } from "@/actions/eventAction";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CountUp from "react-countup";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { categories, tags } from "@prisma/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getBrowseData } from "@/actions/browseAction";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";
import FallbackLoading from "@/components/Loading";

type EventType = {
  id: string;
  name: string;
  description: string;
  location: string;
  event_date: string;
  image: string;
  categories?: {
    id: string;
    name: string;
  };
  tags?: {
    id: string;
    name: string;
  };
};

const filterSchema = z.object({
  tag_id: z.string().nullable(),
  category_id: z.string().nullable(),
  name: z.string().nullable(),
  is_paid: z.coerce.boolean().nullable(),
});

export default function Page() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [tags, setTags] = useState<tags[]>([]);
  const [categories, setCategories] = useState<categories[]>([]);
  const [results, setResults] = useState<EventType[]>([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [joinedEvents, setJoinedEvents] = useState<string[]>([]);

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      name: "",
      category_id: "",
      tag_id: "",
      is_paid: null,
    },
  });

  const searchParams = useSearchParams();
  const queryParams = searchParams.get("query");

  const getData = async () => {
    const getTags = await getBrowseData();
    console.log(getTags);

    setTags(getTags?.tags);
    setCategories(getTags?.categories);
    setEvents(getTags?.events);
  };

  const onSubmit = async (values: z.infer<typeof filterSchema>) => {
    console.log(values);
  };

  const handleResetFilter = async () => {
    window.location.reload();
  };

  const handleFavorite = async () => {
    toast.success("Berhasil ditambahkan!");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (queryParams) {
      handleSearch(queryParams);
    } else {
      setResults(events);
    }
  }, [queryParams]);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    if (query.trim()) {
      const data = await searchEventByTitle(query);
      setResults(data);
    } else {
      setResults(events);
      setIsSearching(false);
    }
  };

  const toggleFavorite = (eventId: string) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter((id) => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  const toggleJoinEvent = (eventId: string) => {
    if (joinedEvents.includes(eventId)) {
      setJoinedEvents(joinedEvents.filter((id) => id !== eventId));
    } else {
      setJoinedEvents([...joinedEvents, eventId]);
    }
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
            <CountUp end={2000} duration={6} className="text-primary" /> Event
            Akademik Tersedia Sekarang
          </h1>
          <p className="text-muted-foreground max-w-lg text-center">
            Jelajahi berbagai event akademik terverifikasi yang dirancang untuk
            mendukung pengembangan diri Anda dengan mudah dan aman.
          </p>
          <div className="max-w-2xl z-10 w-full bg-muted dark:bg-transparent border-2 dark:border border-secondary dark:border-primary grid grid-cols-12 gap-4 rounded-lg mt-10 shadow-xl">
            <div className="lg:col-span-9 col-span-12 p-2 flex items-center">
              <Input
                type="text"
                placeholder="cari nama event..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-lg border-none bg-transparent focus-visible::outline-none focus-visible::border-none focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
            </div>
            <div className="lg:col-span-3 col-span-12 p-2">
              <Button
                onClick={() => handleSearch(query)}
                className="w-full h-full p-4 text-lg text-white"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          {events.length <= 0 ? (
            <FallbackLoading />
          ) : (
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-3">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-xl">Filter</h5>

                  <Button
                    variant={"secondary"}
                    onClick={handleResetFilter}
                    className="hover:text-primary"
                  >
                    Reset
                  </Button>
                </div>

                <Separator className="my-3" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-xl mb-2">Tipe Event</h5>
                    <ul className="flex flex-col gap-2">
                      {tags?.map((item) => (
                        <li key={item.id}>
                          <input
                            type="radio"
                            className="transform scale-150 mr-2"
                            name="group1"
                            value={item.id}
                          />
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-xl mb-2">Kategori Event</h5>
                    <ul className="flex flex-col gap-2">
                      {categories?.map((item) => (
                        <li key={item.id}>
                          <input
                            type="radio"
                            className="transform scale-150 mr-2"
                            name="group1"
                            value={item.id}
                          />
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-xl mb-2">Harga Event</h5>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <input
                          type="radio"
                          className="transform scale-150 mr-2"
                        />
                        <span>Berbayar</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          className="transform scale-150 mr-2"
                        />
                        <span>Gratis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {events?.map((event, index: number) => (
                    <Card
                      key={index}
                      className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                    >
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
                        <div className="flex gap-2 ms-auto">
                          <Link href={"/browse/" + event.id}>
                            <Button
                              variant={"secondary"}
                              className="hover:text-primary transition-all duration-300"
                            >
                              Lihat detail
                            </Button>
                          </Link>
                          <Button variant={"ghost"} onClick={handleFavorite}>
                            <Bookmark className="text-primary" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  );
}
