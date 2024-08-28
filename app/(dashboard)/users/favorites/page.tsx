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
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Clock, LayoutGrid, Plus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Favorites", link: "/users/favorites" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;
  // const { user } = useUser();

  // const res = await fetch(process.env.API_BASE_URL + "/users/{user?.id}/favorites");
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
      (country ? `&search=${country}` : "")
  );
  const employeeRes = await res.json();
  const totalUsers = employeeRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Employee[] = employeeRes.users;
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading
          title={`Event yang disukai (${totalUsers})`}
          description="Daftar berbagai event akademik yang disukai"
        />
        <Separator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Card className="group hover:-translate-y-3 hover:border-primary transition-all duration-300">
            <Image
              src={"/preview.png"}
              alt="image"
              width={600}
              height={600}
              loading="lazy"
              className="object-contain rounded-t-lg"
            />
            <CardHeader>
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
    </ScrollArea>
  );
}
