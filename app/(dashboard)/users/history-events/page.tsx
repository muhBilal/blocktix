"use client";
import { getHistoryUserEvent } from "@/actions/eventAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/employee-tables/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { events } from "@prisma/client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "History Events", link: "/users/history-events" },
];

type HistoryEvent = {
  id: string;
  events: events;
};

export default function Page() {
  const [histories, setHistories] = useState<HistoryEvent[]>([]);

  const getData = async () => {
    const req = await getHistoryUserEvent();
    setHistories(req);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading
          title={`Total event yang diikuti (${histories?.length ?? 0})`}
          description="Daftar riwayat event yang pernah diikuti."
        />
        <Separator />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {histories?.map((history) => (
            <Card
              key={history.id}
              className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
            >
              <Image
                src={history.events.image ?? ""}
                alt="image"
                width={600}
                height={600}
                loading="lazy"
                className="object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{history.events.name}</CardTitle>
                <CardDescription className="max-w-lg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: history.events.description ?? "",
                    }}
                  />
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="ms-auto">
                  <Link href={"/events/" + history.events.id}>
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
    </>
  );
}
