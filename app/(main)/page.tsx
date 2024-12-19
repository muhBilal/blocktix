"use client";

import {Button} from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import {
    BookCopy,
    Bookmark,
    Clock,
    GraduationCap,
    LayoutGrid,
    MapPin,
    Speech,
    Tag,
    Trophy,
    UserRound,
    Users
} from "lucide-react";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import TextEffect from "@/components/TextEffect";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import CountUp from "react-countup";
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from "next/image";
import {formatDate, formatPrice} from "@/lib/format";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function Home({params}: { params: { id: string } }) {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(
            `/events?name=${encodeURIComponent(
                searchQuery
            )}&tags=&categories=&prices=`
        );
    };

    const tagsUp = [
        {
            id: 1,
            jenisAcara: "Seminar",
            deskripsi:
                "kesempatan berharga untuk memperluas wawasan dan mendapatkan pengetahuan terkini langsung dari ahlinya.",
            icon: (
                <Speech
                    width={60}
                    height={60}
                    className="group-hover:text-white transition-all duration-200 ease-in-out"
                />
            ),
            bg: "#F8BBD0",
        },
        {
            id: 2,
            jenisAcara: "Lomba",
            deskripsi:
                "ajang untuk menunjukkan keterampilan Anda dan meraih pengakuan atas prestasi pada bidang yang Anda minati",
            icon: (
                <Trophy
                    width={60}
                    height={60}
                    className="group-hover:text-white transition-all duration-200 ease-in-out"
                />
            ),
            bg: "#E1BEE7",
        },
        {
            id: 3,
            jenisAcara: "Workshop",
            deskripsi:
                "kegiatan interaktif yang melibatkan peserta untuk belajar secara langsung dengan bimbingan instruktur",
            icon: (
                <Users
                    width={60}
                    height={60}
                    className="group-hover:text-white transition-all duration-200 ease-in-out"
                />
            ),
            bg: "#FFABAB",
        },
    ];

    const tagsDown = [
        {
            id: 1,
            jenisAcara: "Bootcamp",
            deskripsi:
                "program pelatihan intensif yang mempercepat pembelajaran praktis dan keterampilan, mempersiapkan peserta untuk sukses dalam karier dengan cepat",
            icon: (
                <BookCopy
                    width={60}
                    height={60}
                    className="group-hover:text-white transition-all duration-200 ease-in-out"
                />
            ),
            bg: "#F50058",
        },
        {
            id: 2,
            jenisAcara: "Beasiswa",
            deskripsi:
                "peluang berharga yang memungkinkan Anda mendapatkan pendidikan tanpa beban biaya, sehingga bisa fokus pada studi dan pengembangan diri sambil membuka peluang karier yang lebih luas",
            icon: (
                <GraduationCap
                    width={60}
                    height={60}
                    className="group-hover:text-white transition-all duration-200 ease-in-out"
                />
            ),
            bg: "#D728F4",
        },
    ];

    const events = [
        {
            id: 1,
            image: "/event_lain.png",
            categories: {name: "Seminar"},
            tags: {name: "Motivasi"},
            is_online: true,
            event_date: "2024-12-20",
            is_paid: true,
            price: 50000,
            name: "Seminar Nasional Motivasi",
            description:
                "Seminar ini bertujuan untuk memberikan motivasi kepada peserta dalam mengejar impian mereka.",
            is_favorite: false,
        },
        {
            id: 2,
            image: "/event_lain.png",
            categories: {name: "Musik"},
            tags: {name: "Konser"},
            is_online: false,
            event_date: "2024-12-25",
            is_paid: false,
            price: null,
            name: "Konser Musik Akustik",
            description:
                "Nikmati alunan musik akustik yang indah bersama musisi terkenal dari seluruh negeri.",
            is_favorite: true,
        },
        {
            id: 3,
            image: "/event_lain.png",
            categories: {name: "Olahraga"},
            tags: {name: "Lomba"},
            is_online: false,
            event_date: "2024-12-30",
            is_paid: true,
            price: 100000,
            name: "Lomba Lari 10K",
            description:
                "Ayo ikuti lomba lari 10K di pusat kota dan raih hadiah menarik untuk para pemenang.",
            is_favorite: false,
        },
        {
            id: 4,
            image: "/event_lain.png",
            categories: {name: "Kuliner"},
            tags: {name: "Festival"},
            is_online: false,
            event_date: "2025-01-05",
            is_paid: false,
            price: null,
            name: "Festival Kuliner",
            description:
                "Jelajahi berbagai macam kuliner khas daerah dari seluruh penjuru negeri.",
            is_favorite: true,
        },
    ];

    return (
        <ScrollArea className="h-full">
            <span
                className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>

            <Wrapper>
                <main className="pt-36">
                    <section className="relative overflow-hidden">
                        <div className="container">
                            <div className="grid grid-cols-1 justify-center text-center mt-10">
                                <div className="relative">
                                    <div className="relative mb-5">
                                        <h1
                                            className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl"
                                        >
                                            Cari Ticket dengan
                                            <br/>

                                            <span
                                                className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text"
                                            > Mudah dan Terpercaya</span
                                            >
                                        </h1>

                                        <div
                                            className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"
                                        ></div>

                                        <div
                                            className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"
                                        ></div>
                                    </div>
                                    <p
                                        className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto"
                                    >
                                        Temukan berbagai event akademik <span
                                        className={`text-primary`}>terverifikasi</span> dengan mudah dan aman, fokus
                                        pada <span className={`text-primary`}>pengembangan diri</span> tanpa khawatir
                                        akan <span className={`text-primary`}>penipuan</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                                <span
                                    className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                                <span
                                    className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col mx-auto justify-center items-center text-center">
                        <div
                            className="max-w-2xl w-full bg-muted dark:bg-transparent border-2 dark:border border-secondary dark:border-primary rounded-lg mt-10 shadow-xl">
                            <form
                                onSubmit={(e) => handleSearch(e)}
                                className="grid grid-cols-12 gap-4"
                            >
                                <div className="lg:col-span-9 col-span-12 p-2 flex items-center">
                                    <Input
                                        type="text"
                                        placeholder="cari nama event..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full text-lg border-none bg-transparent focus-visible::outline-none focus-visible::border-none focus-visible:ring-transparent focus-visible:ring-offset-0"
                                    />
                                </div>
                                <div className="lg:col-span-3 col-span-12 p-2">
                                    <Button
                                        type="submit"
                                        className="w-full h-full p-4 text-lg text-white"
                                    >
                                        Search
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="flex justify-center items-center w-full">
                            <Card className="max-w-4xl w-full">
                                <div className="grid grid-cols-12 items-center p-6 gap-4 md:gap-0 w-full">
                                    <div className="md:col-span-4 col-span-12">
                                        <h3 className="text-4xl font-bold text-primary">
                                            Tersedia
                                        </h3>
                                    </div>
                                    <div className="md:col-span-8 col-span-12">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3">
                                                <div className="flex flex-col items-center justify-center">
                                                    <h3 className="text-2xl font-bold">
                                                        <CountUp end={7} duration={7}/>
                                                    </h3>
                                                    <p className="text-muted-foreground">Tipe Event</p>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="flex flex-col items-center justify-center">
                                                    <h3 className="text-2xl font-bold">
                                                        <CountUp end={2000} duration={3}/>
                                                    </h3>
                                                    <p className="text-muted-foreground">Event</p>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="flex flex-col items-center justify-center">
                                                    <h3 className="text-2xl font-bold">
                                                        <CountUp end={1000} duration={3}/>
                                                    </h3>
                                                    <p className="text-muted-foreground">Channel</p>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="flex flex-col items-center justify-center">
                                                    <h3 className="text-2xl font-bold">
                                                        <CountUp end={5000} duration={3}/>
                                                    </h3>
                                                    <p className="text-muted-foreground">Pengguna</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="mt-60">
                        <div className="flex flex-col gap-4 justify-center items-center text-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Berbagai Macam Event
                            </h2>
                            <p className="text-muted-foreground max-w-lg">
                                Platform BlockTix menawarkan kesempatan untuk menjelajahi dan
                                menemukan acara yang sesuai dengan minat dan kebutuhan Anda.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
                            {tagsUp.map((card) => (
                                <Card
                                    key={card.id}
                                    className="min-h-[200px] group hover:border-primary transition-all duration-200 ease-in-out"
                                >
                                    <div className="grid grid-cols-12 w-full h-full p-2 gap-4">
                                        <div
                                            className="col-span-5 rounded-lg flex justify-center items-center group-hover:!bg-primary transition-all duration-200 ease-in-out"
                                            style={{backgroundColor: card.bg}}
                                        >
                                            {card.icon}
                                        </div>
                                        <div className="col-span-7">
                                            <div className="flex flex-col gap-4">
                                                <h2 className="font-bold text-xl lg:text-2xl">
                                                    {card.jenisAcara}
                                                </h2>
                                                <p className="text-muted-foreground">
                                                    {card.deskripsi}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tagsDown.map((card) => (
                                <Card
                                    key={card.id}
                                    className="min-h-[200px] group hover:border-primary transition-all duration-200 ease-in-out"
                                >
                                    <div className="grid grid-cols-12 w-full h-full p-2 gap-4">
                                        <div
                                            className="col-span-5 rounded-lg flex justify-center items-center group-hover:!bg-primary transition-all duration-200 ease-in-out"
                                            style={{backgroundColor: card.bg}}
                                        >
                                            {card.icon}
                                        </div>
                                        <div className="col-span-7">
                                            <div className="flex flex-col gap-4">
                                                <h2 className="font-bold text-xl lg:text-2xl">
                                                    {card.jenisAcara}
                                                </h2>
                                                <p className="text-muted-foreground">
                                                    {card.deskripsi}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="mt-40">
                        <div className="flex flex-col gap-4 justify-center items-center text-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Ikuti Event & Upgrade Dirimu
                            </h2>
                            <p className="text-muted-foreground max-w-xl">
                                Jangan lewatkan kesempatan berkembang! Ikuti event akademik untuk memperkaya wawasan dan keterampilan Anda.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-14">
                            {events.map((event) => (
                                <Card
                                    key={event.id}
                                    className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                                >
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
                                                    <UserRound className="w-4 h-4"/>
                                                    <p className="text-xs">
                                                        {event.categories?.name}
                                                    </p>
                                                </div>
                                                <div className="flex gap-1 items-center text-muted-foreground">
                                                    <LayoutGrid className="w-4 h-4"/>
                                                    <p className="text-xs">{event.tags?.name}</p>
                                                </div>
                                                <div className="flex gap-1 items-center text-muted-foreground">
                                                    <MapPin className="w-4 h-4"/>
                                                    <p className="text-xs">
                                                        {event.is_online ? "Online" : "Offline"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex gap-1 items-center text-muted-foreground">
                                                    <Clock className="w-4 h-4"/>
                                                    <p className="text-xs">
                                                        {event.event_date &&
                                                            formatDate(event.event_date)}
                                                    </p>
                                                </div>
                                                <div className="flex gap-1 items-center text-muted-foreground">
                                                    <Tag className="w-4 h-4"/>
                                                    <p className="text-xs">
                                                        {event.is_paid
                                                            ? formatPrice(event.price)
                                                            : "Gratis"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <CardTitle>
                                            <Link
                                                href={"/events/" + event.id}
                                                className="hover:text-primary"
                                            >
                                                {event.name.length > 20
                                                    ? event.name.slice(0, 20) + "..."
                                                    : event.name}
                                            </Link>
                                        </CardTitle>
                                        <CardDescription className="max-w-lg">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: event.description
                                                        ? event.description.length > 150
                                                            ? `${event.description.slice(0, 150)}...`
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
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant={"ghost"}
                                                            onClick={
                                                                async () =>
                                                                    console.log("oke")
                                                                // await handleFavorite(event.id)
                                                            }
                                                            className={`hover:text-white hover:bg-primary transition-all duration-200 ${
                                                                event.is_favorite
                                                                    ? "bg-primary text-white"
                                                                    : "text-primary"
                                                            }`}
                                                        >
                                                            <Bookmark/>
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        {event.is_favorite ? (
                                                            <p>Hapus Favorite</p>
                                                        ) : (
                                                            <p>Simpan Event</p>
                                                        )}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>
            </Wrapper>
        </ScrollArea>
    );
}
