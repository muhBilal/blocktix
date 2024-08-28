import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/employee-tables/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus, Settings, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Channel", link: "/users/channels" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  // const res = await fetch(process.env.API_BASE_URL + "/channels");
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
        <div className="relative h-[300px]">
          <Image
            src={"/preview.png"}
            fill
            alt="background"
            sizes="100%"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="w-40 h-40">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-2xl">Nama Channel</h3>
                <div className="flex gap-3">
                  <p className="text-muted-foreground text-sm">Saya Akun</p>
                  <p className="text-muted-foreground text-sm">|</p>
                  <p className="text-muted-foreground text-sm">
                    2000 Followers
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">40 Event</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href={"/users/channels/events/create"}
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    className: "text-primary",
                  })
                )}
              >
                <Plus className="mr-2 h-4 w-4" /> Tambah Event
              </Link>
              <Link
                href={"/users/channels/update/2"}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                <UserRoundPen className="mr-2 h-4 w-4" /> Edit Channel
              </Link>
            </div>
          </div>
        </div>
        <Separator />
        <Tabs defaultValue="events" className="space-y-4">
          <TabsList>
            <TabsTrigger value="events">Daftar Event</TabsTrigger>
            <TabsTrigger value="description">Deskripsi</TabsTrigger>
          </TabsList>
          <TabsContent value="events" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
          </TabsContent>
          <TabsContent value="description" className="space-y-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            facilis aliquam exercitationem qui inventore consectetur quibusdam,
            vel, voluptatum esse hic suscipit rem quisquam, veniam voluptatibus
            magnam. Eos minus officiis animi nulla assumenda veritatis quo unde
            deserunt. Provident dicta vero ullam similique magni rem eaque,
            culpa quibusdam dolorem maiores nobis necessitatibus quam
            consequatur velit possimus odit nemo quae veritatis fugit ad laborum
            recusandae tenetur a. Aspernatur vitae quod quae, excepturi est
            porro praesentium explicabo voluptates aperiam eaque dolorum,
            corrupti aliquam, vero fuga cum! Minima aspernatur alias obcaecati
            ducimus reprehenderit porro repellendus accusantium sunt amet
            provident fugit fugiat cumque officiis eveniet quae in tempora
            distinctio harum officia ratione eum, iste maxime, nam qui. Sit
            magnam voluptas molestias in natus fugit reprehenderit ratione
            voluptatem reiciendis placeat quas nesciunt itaque assumenda fugiat
            eum perspiciatis, fuga non recusandae? Fugiat eos laborum unde
            labore debitis aut laudantium velit aliquam. Consequuntur
            perspiciatis inventore aspernatur iste libero quod earum veniam
            temporibus suscipit possimus adipisci sapiente tempora quaerat
            exercitationem ipsa, ut voluptatem ducimus neque cumque dolorem. Rem
            corrupti soluta odio iusto ad accusantium fugiat optio at veritatis
            nulla laudantium, accusamus eos! Veritatis fugiat eius, adipisci,
            error quibusdam eaque impedit architecto ad tempora omnis aliquam!
            Molestias perferendis temporibus earum architecto!
          </TabsContent>
        </Tabs>
        {/* <div className="border-2 border-dotted rounded-lg mt-10 h-[200px] flex justify-center items-center">
          <Link
            href={"/users/channels/create"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Buat Channel
          </Link>
        </div> */}
      </div>
    </ScrollArea>
  );
}
