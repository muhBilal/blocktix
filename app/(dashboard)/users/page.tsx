"use client";
import { AreaGraph } from "@/components/charts/area-graph";
import { BarGraph } from "@/components/charts/bar-graph";
import { PieGraph } from "@/components/charts/pie-graph";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  const { user } = useUser();
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back{" "}
            <span className="text-primary">{user?.firstName}</span> 👋
          </h2>
          <Link
            href={"/dashboard/employee/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Buat Channel
          </Link>
        </div>
        <Separator />
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="text-primary">Event yang pernah diikuti</div>
            <Link href={"#"}>
              <Button variant={"secondary"} className="hover:text-primary">
                Lihat semua
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-5">
              <Card className="hover:-translate-y-3 hover:border-primary transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 p-2">
                  <Image
                    src={"/preview.png"}
                    alt="events"
                    width={500}
                    height={500}
                    className="object-contain border border-muted rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <CardTitle>Event Kemanusiaan</CardTitle>
                    <CardDescription>
                      Diadakan oleh{" "}
                      <Link href={"#"} className="text-primary">
                        Budiono Siregar
                      </Link>
                    </CardDescription>
                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center text-muted-foreground">
                        <Clock />
                        <p className="text-xs">17 Agustus 2024</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center text-muted-foreground">
                        <LayoutGrid />
                        <p className="text-xs">Lomba</p>
                      </div>
                      <div className="flex gap-2 items-center text-muted-foreground">
                        <Tag />
                        <p className="text-xs">Rp. 17.000</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quod nam ea labore natus rerum eum sit culpa!
                        Nobis quas consequuntur velit quaerat impedit culpa
                        expedita sit incidunt, ullam tempore ex modi doloribus
                        saepe magnam quod qui a facilis voluptatibus aliquam
                        placeat minima optio quis! Facilis, eligendi ad.
                        Voluptate vitae ab obcaecati minus ea facere
                        voluptatibus tempore maxime! Quis doloremque
                        necessitatibus accusantium. Maxime aperiam vel dolor
                        fugiat ullam velit eligendi deserunt obcaecati officia
                        quo, molestias et similique deleniti optio officiis
                        accusamus...
                      </div>
                    </div>
                    <div className="mt-3 ms-auto">
                      <Link href={"#"}>
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
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="text-primary">Channel yang diikuti</div>
            <Link href={"#"}>
              <Button variant={"secondary"} className="hover:text-primary">
                Lihat semua
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Card className="group hover:-translate-y-3 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <Image
                      src={"/preview.png"}
                      alt="image"
                      width={500}
                      height={500}
                      loading="lazy"
                      className="object-contain rounded"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-xl">Jonathan Evan</h3>
                      <p className="text-muted-foreground text-xs">
                        since 20 Agustus 2024
                      </p>
                    </div>
                  </div>
                  <CardTitle>Bersih itu sehat!!</CardTitle>
                  <CardDescription className="max-w-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, expedita quo! Consectetur sunt placeat vero
                    laudantium sapiente. Id, excepturi magnam....
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="ms-auto">
                    <Link href={"#"}>
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
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
