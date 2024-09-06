"use client";
import { getHistoryUserEvent } from "@/actions/eventAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { categories, events, tags } from "@prisma/client";
import { Clock, LayoutGrid, MapPin, Plus, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatDate, formatPrice } from "@/lib/format";
import FallbackLoading from "@/components/Loading";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "History Events", link: "/users/history-events" },
];

type EventType = {
  id: string;
  name: string;
  image: string;
  description: string;
  event_date: Date;
  price: number;
  is_online: boolean;
  is_paid: boolean;
  tags: tags;
  categories: categories;
};

type HistoryEvent = {
  id: string;
  status: string;
  events: EventType;
};

export default function Page() {
  const [histories, setHistories] = useState<HistoryEvent[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    const req = await getHistoryUserEvent();
    setHistories(req);
    setLoading(false);
  };

  const handleSubmitPayment = async () => {
    toast.success("Pembayaran berhasil!");
    router.push("/users/history-events");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading
          title={`Total event yang diikuti (${histories?.length ?? 0})`}
          description="Daftar riwayat event yang pernah diikuti."
        />
        <Separator />
        {loading ? (
          <FallbackLoading />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {histories.length > 0
              ? histories?.map((item, index: number) => (
                  <Card
                    key={index}
                    className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                  >
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.events.image || ""}
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
                            <p className="text-xs">
                              {item.events.categories.name}
                            </p>
                          </div>
                          <div className="flex gap-1 items-center text-muted-foreground">
                            <LayoutGrid className="w-4 h-4" />
                            <p className="text-xs">{item.events.tags.name}</p>
                          </div>
                          <div className="flex gap-1 items-center text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <p className="text-xs">
                              {item.events.is_online ? "Online" : "Offline"}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex gap-1 items-center text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <p className="text-xs">
                              {item.events.event_date &&
                                formatDate(item.events.event_date)}
                            </p>
                          </div>
                          <div className="flex gap-1 items-center text-muted-foreground">
                            <Tag className="w-4 h-4" />
                            <p className="text-xs">
                              {item.events.is_paid
                                ? formatPrice(item.events.price)
                                : "Gratis"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <CardTitle>
                        <Link
                          href={"/events/" + item.events.id}
                          className="hover:text-primary"
                        >
                          {item.events.name && item.events.name?.length > 20
                            ? item.events.name?.slice(0, 20) + "..."
                            : item.events.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="max-w-lg">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.events.description
                              ? item.events.description.length > 150
                                ? `${item.events.description.slice(0, 150)}...`
                                : item.events.description
                              : "",
                          }}
                        />
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex gap-2 ms-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>Lunasi Pembayaran</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Lunasi Pembayaran</DialogTitle>
                              <DialogDescription>
                                Upload bukti pembayaranmu disini.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button onClick={handleSubmitPayment}>
                                Submit
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Link href={"/events/" + item.events.id}>
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
                ))
              : "Belum pernah mengikuti event"}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
