import { getAllData } from "@/actions/followAction";
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
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Follows", link: "/users/follows" },
];

export default async function Page() {
  const followings = await getAllData();
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading
          title={`Channel yang diikuti (${followings?.length ?? 0})`}
          description="Daftar channel akademik yang diikuti."
        />
        <Separator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {followings &&
            followings.map((item, index: number) => (
              <Card
                key={index}
                className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
              >
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
            ))}
        </div>
      </div>
    </>
  );
}
