"use client";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { BookmarkCheck, Clock, TagIcon, GanttChartSquare } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllData, searchEventByTitle } from "@/actions/eventAction";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { get } from "http";
import { boolean } from "zod";

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

export default function Page() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [results, setResults] = useState<EventType[]>([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [joinedEvents, setJoinedEvents] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const queryParams = searchParams.get("query");

  const getAllEvents = async () => {
    const eventAction = await getAllData();
    console.log(eventAction);
    setEvents(eventAction);
  };

  useEffect(() => {
    getAllEvents();
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
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="flex flex-col items-center gap-5 px-36 py-16 lg:px-44 lg:py-16 bg-blue-50 mb-8 rounded-lg relative">
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
          <h1 className="text-4xl font-semibold text-center">
            Event Akademik Tersedia Sekarang
          </h1>
          <p className="text-lg">
            Jelajahi berbagai event akademik terverifikasi yang dirancang untuk
            mendukung pengembangan diri Anda dengan mudah dan aman.{" "}
          </p>
          <div className="relative flex items-center overflow-hidden mt-5 rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-4 w-96 focus:outline-none "
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              onClick={() => handleSearch(query)}
              className="absolute right-0 bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/4">
              <div className="mb-3">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-xl">Filter</h5>

                  <span className="ml-32 cursor-pointer text-blue-500 font-base">
                    Reset
                  </span>
                </div>

                <hr className="mt-2" />
              </div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-2 ">Kategori</h5>
                <div>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={1}
                      />
                      <span>Mahasiswa/Siswa</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={2}
                      />
                      <span>Umum</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-2 ">Tag</h5>
                <div>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={1}
                      />
                      <span>Beasiswa</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={2}
                      />
                      <span>Seminar</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={3}
                      />
                      <span>Bootcamp</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={3}
                      />
                      <span>Workshop</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={3}
                      />
                      <span>Asisten Riset</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-2 ">Harga Event</h5>
                <div>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group3"
                        value={1}
                      />
                      <span>Gratis</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group3"
                        value={2}
                      />
                      <span>Berbayar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 gap-10 mb-5 lg:grid-cols-3  lg:gap-24 mt-10 ml-6">
                {results.length > 0 ? (
                  results?.map((result) => (
                    <div
                      className="bg-blue-50 h-80 w-60 rounded-lg border border-slate-200"
                      key={result.id}
                    >
                      {/* Bagian Atas 30% */}
                      <div className="flex flex-col justify-center items-center h-[30%]">
                        <div className="flex">
                          {/* Logo (1/4) */}
                          <div className="w-1/4 flex items-center justify-center">
                            <Image
                              src={result.image}
                              alt="logo"
                              width={48}
                              height={48}
                            />
                          </div>
                          {/* Nama dan Lokasi Perusahaan (3/4) */}
                          <div className="w-3/4 pl-2">
                            <Link href={`/browse/${result.id}`}>
                              <h3 className="text-lg font-semibold">
                                {result.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600">
                              {result.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bagian Bawah 70% */}
                      <div className="h-[70%] flex flex-col justify-center items-center">
                        {/* Judul Posisi dan Lokasi */}
                        <div className="flex flex-col items-start mt-10">
                          <h5 className="text-muted-foreground text-sm mb-4">
                            {result.description}
                          </h5>
                          <div className="flex flex-wrap mb-1 ml-3">
                            <div className="flex mr-4 gap-1">
                              <TagIcon />
                              <p className="text-sm">{result?.tags?.name}</p>
                            </div>
                            <div className="flex gap-1">
                              <GanttChartSquare />
                              <p className="text-sm">
                                {result?.categories?.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1 ml-3">
                            <Clock />
                            <p className="text-sm">
                              {formatDateIndonesian(result.event_date)}
                            </p>
                          </div>
                        </div>
                        {/* Tombol Claim dan Icon Simpan */}
                        <div className="flex justify-between items-center mt-auto">
                          <Button
                            onClick={() => toggleJoinEvent(result.id)}
                            className={`text-white px-10 py-2 rounded-lg mb-3 ${
                              joinedEvents.includes(result.id)
                                ? "bg-slate-500"
                                : "bg-blue-500"
                            }`}
                          >
                            {joinedEvents.includes(result.id)
                              ? "Joined"
                              : "Join Event"}
                          </Button>
                          <Button className="text-white hover:text-white-700 ml-3 mb-3">
                            <BookmarkCheck />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : isSearching ? (
                  <p>Data tidak ditemukan</p>
                ) : (
                  events?.map((event) => (
                    <div
                      className="bg-blue-50 h-80 w-60 rounded-lg border border-slate-200"
                      key={event.id}
                    >
                      {/* Bagian Atas 30% */}
                      <div className="flex flex-col justify-center items-center h-[30%]">
                        <div className="flex">
                          {/* Logo (1/4) */}
                          <div className="w-1/4 flex items-center justify-center">
                            <Image
                              src={event.image}
                              alt="logo"
                              width={48}
                              height={48}
                            />
                          </div>
                          {/* Nama dan Lokasi Perusahaan (3/4) */}
                          <div className="w-3/4 pl-2">
                            <Link href={`/browse/${event.id}`}>
                              <h3 className="text-lg font-semibold">
                                {event.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bagian Bawah 70% */}
                      <div className="h-[70%] flex flex-col justify-center items-center">
                        {/* Judul Posisi dan Lokasi */}
                        <div className="flex flex-col items-start mt-10">
                          <h5 className="text-muted-foreground text-sm mb-4">
                            {event.description}
                          </h5>
                          <div className="flex flex-wrap mb-1 ml-3">
                            <div className="flex mr-4 gap-1">
                              <TagIcon />
                              <p className="text-sm">{event?.tags?.name}</p>
                            </div>
                            <div className="flex gap-1">
                              <GanttChartSquare />
                              <p className="text-sm">
                                {event?.categories?.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1 ml-3">
                            <Clock />
                            <p className="text-sm">
                              {formatDateIndonesian(event.event_date)}
                            </p>
                          </div>
                        </div>
                        {/* Tombol Claim dan Icon Simpan */}
                        <div className="flex justify-between items-center mt-auto">
                          <Button
                            onClick={() => toggleJoinEvent(event.id)}
                            className={`text-white px-10 py-2 rounded-lg mb-3 ${
                              joinedEvents.includes(event.id)
                                ? "bg-slate-500"
                                : "bg-blue-500"
                            }`}
                          >
                            {joinedEvents.includes(event.id)
                              ? "Joined"
                              : "Join Event"}
                          </Button>
                          <Button
                            className={`ml-3 mb-3 ${
                              favorites.includes(event.id)
                                ? "bg-blue-600 text-white"
                                : "bg-transparent text-gray-700"
                            }`}
                            onClick={() => toggleFavorite(event.id)}
                          >
                            <BookmarkCheck />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
