import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CornerUpRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Page() {
  return (
    <Wrapper>
      <div className="relative mt-32 h-[500px] mb-10">
        <Image
          src={"/preview.png"}
          alt="Poster dummy"
          fill
          sizes="100%"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-10 mb-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 ">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-lg"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">AsWINN Channel</h3>
            </div>
          </div>
          <Button>Ikuti Event</Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 ">
          <Tabs defaultValue="events" className="space-y-4">
            <TabsList>
              <TabsTrigger value="events">Deskripsi</TabsTrigger>
              <TabsTrigger value="description">Informasi</TabsTrigger>
              <TabsTrigger value="contact">Kontak</TabsTrigger>
            </TabsList>
            <TabsContent value="events" className="space-y-4">
              <h2 className="font-semibold text-3xl">Deskripsi Acara</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                facilis aliquam exercitationem qui inventore consectetur
                quibusdam, vel, voluptatum esse hic suscipit rem quisquam,
                veniam voluptatibus magnam. Eos minus officiis animi nulla
                assumenda veritatis quo unde deserunt. Provident dicta vero
                ullam similique magni rem eaque, culpa quibusdam dolorem maiores
                nobis necessitatibus quam consequatur velit possimus odit nemo
                quae veritatis fugit ad laborum recusandae tenetur a. Aspernatur
                vitae quod quae, excepturi est porro praesentium explicabo
                voluptates aperiam eaque dolorum, corrupti aliquam, vero fuga
                cum! Minima aspernatur alias obcaecati ducimus reprehenderit
                porro repellendus accusantium sunt amet provident fugit fugiat
                cumque officiis eveniet quae in tempora distinctio harum officia
                ratione eum, iste maxime, nam qui. Sit magnam voluptas molestias
                in natus fugit reprehenderit ratione voluptatem reiciendis
                placeat quas nesciunt itaque assumenda fugiat eum perspiciatis,
                fuga non recusandae? Fugiat eos laborum unde labore debitis aut
                laudantium velit aliquam. Consequuntur perspiciatis inventore
                aspernatur iste libero quod earum veniam temporibus suscipit
                possimus adipisci sapiente tempora quaerat exercitationem ipsa,
                ut voluptatem ducimus neque cumque dolorem. Rem corrupti soluta
                odio iusto ad accusantium fugiat optio at veritatis nulla
                laudantium, accusamus eos! Veritatis fugiat eius, adipisci,
                error quibusdam eaque impedit architecto ad tempora omnis
                aliquam! Molestias perferendis temporibus earum architecto!
              </p>
              <Button>Ikuti Event</Button>
            </TabsContent>
            <TabsContent value="description" className="space-y-4">
              <h2 className="font-semibold text-3xl">Detail Acara</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                facilis aliquam exercitationem qui inventore consectetur
                quibusdam, vel, voluptatum esse hic suscipit rem quisquam,
                veniam voluptatibus magnam. Eos minus officiis animi nulla
                assumenda veritatis quo unde deserunt. Provident dicta vero
                ullam similique magni rem eaque, culpa quibusdam dolorem maiores
                nobis necessitatibus quam consequatur velit possimus odit nemo
                quae veritatis fugit ad laborum recusandae tenetur a. Aspernatur
                vitae quod quae, excepturi est porro praesentium explicabo
                voluptates aperiam eaque dolorum, corrupti aliquam, vero fuga
                cum! Minima aspernatur alias obcaecati ducimus reprehenderit
                porro repellendus accusantium sunt amet provident fugit fugiat
                cumque officiis eveniet quae in tempora distinctio harum officia
                ratione eum, iste maxime, nam qui. Sit magnam voluptas molestias
                in natus fugit reprehenderit ratione voluptatem reiciendis
                placeat quas nesciunt itaque assumenda fugiat eum perspiciatis,
                fuga non recusandae? Fugiat eos laborum unde labore debitis aut
                laudantium velit aliquam. Consequuntur perspiciatis inventore
                aspernatur iste libero quod earum veniam temporibus suscipit
                possimus adipisci sapiente tempora quaerat exercitationem ipsa,
                ut voluptatem ducimus neque cumque dolorem. Rem corrupti soluta
                odio iusto ad accusantium fugiat optio at veritatis nulla
                laudantium, accusamus eos! Veritatis fugiat eius, adipisci,
                error quibusdam eaque impedit architecto ad tempora omnis
                aliquam! Molestias perferendis temporibus earum architecto!
              </p>
            </TabsContent>
            <TabsContent value="contact" className="space-y-4">
              <div className="flex flex-col">
                <h2 className="font-semibold text-3xl mb-8">
                  Hubungi Partner Acara
                </h2>
                <div className="border border-slate-200 p-6 rounded-lg mb-8">
                  <div className="flex items-center mb-8">
                    <Image
                      src={"/logo.svg"}
                      width={50}
                      height={50}
                      alt="logo"
                      className="mr-4"
                    ></Image>
                    <h2 className="text-semibold text-3xl">
                      PT Sumber Daya Multi Cendekia
                    </h2>
                  </div>
                  <Separator className="mb-8" />
                  <div className="flex flex-col text-xl gap-5 ml-5">
                    <div>
                      <h5>No. Telepon</h5>
                      <p className="font-semibold">08810282726</p>
                    </div>
                    <div>
                      <h5>Alamat Email</h5>
                      <p className="font-semibold">example.emaildotcom</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          {/* sini */}
          <div className=" flex items-center justify-start bg-primary rounded-lg mt-5">
            <div className="relative h-[150px] p-3 mr-5">
              <GraduationCap className="w-full h-full text-white" />
            </div>
            <div className="flex flex-col items-start mr-10">
              <h4 className="text-2xl font-bold text-white">
                Tidak tertarik dengan event ini ?
              </h4>
              <p className="text-2xl font-medium text-white">
                Lihat event lainnya
              </p>
            </div>
            <div className="relative h-[45px] ml-auto mr-10">
              <Link href="/browse">
                <CornerUpRight className="w-full h-full text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <h2 className="font-semibold text-3xl mt-14 mb-5">Acara Serupa</h2>
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-10">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Link href="/browse">
                <Image
                  src={"/event_lain.png"}
                  alt="gambar event lain"
                  width={224}
                  height={224}
                  className="w-full object-cover"
                />
              </Link>

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <Link href="/browse">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Link href="/browse">
                <Image
                  src={"/event_lain.png"}
                  alt="gambar event lain"
                  width={224}
                  height={224}
                  className="w-full object-cover"
                />
              </Link>

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <Link href="/browse">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
