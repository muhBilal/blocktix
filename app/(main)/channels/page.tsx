import React from "react";
import Wrapper from "@/components/Wrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <Wrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="mr-11">
              <div className="flex justify-between">
                <h5 className="font-semibold text-xl">Filter</h5>

                <span className="ml-32 cursor-pointer text-blue-500 font-base">
                  Reset
                </span>
              </div>

              <hr className="mt-2" />
              <div className="flex justify-center gap-3 items-center mt-5 rounded-lg ">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-20 py-[9px] lg:px-4 lg:py-2 focus:outline-none border border-slate-300 rounded-lg mb-2"
                />
                <Button className=" bg-blue-500 text-white px-4 py-2 rounded-xl mb-2 mr-2">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8 ml-6">
              <Card className="group hover:-translate-y-3 hover:border-primary transition-all duration-300">
                <Image
                  src={"/preview.png"}
                  alt="image"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="object-contain rounded"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-5">
                    <h3 className="font-bold text-muted-foreground text-xs">
                      Jonathan Evan
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      since 20 Agustus 2024
                    </p>
                  </div>
                  <CardTitle>Bersih itu sehat!!</CardTitle>
                </CardHeader>
                <CardFooter>
                  <div className="ms-auto">
                    <Button
                      variant={"secondary"}
                      className="hover:text-primary transition-all duration-300 mr-2"
                    >
                      Lihat detail
                    </Button>
                    <Button>Ikuti</Button>
                  </div>
                </CardFooter>
              </Card>
              <Card className="group hover:-translate-y-3 hover:border-primary transition-all duration-300">
                <Image
                  src={"/preview.png"}
                  alt="image"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="object-contain rounded"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-5">
                    <h3 className="font-bold text-muted-foreground text-xs">
                      Jonathan Evan
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      since 20 Agustus 2024
                    </p>
                  </div>
                  <CardTitle>Bersih itu sehat!!</CardTitle>
                </CardHeader>
                <CardFooter>
                  <div className="ms-auto">
                    <Button
                      variant={"secondary"}
                      className="hover:text-primary transition-all duration-300 mr-2"
                    >
                      Lihat detail
                    </Button>
                    <Button>Ikuti</Button>
                  </div>
                </CardFooter>
              </Card>
              <Card className="group hover:-translate-y-3 hover:border-primary transition-all duration-300">
                <Image
                  src={"/preview.png"}
                  alt="image"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="object-contain rounded"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-5">
                    <h3 className="font-bold text-muted-foreground text-xs">
                      Jonathan Evan
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      since 20 Agustus 2024
                    </p>
                  </div>
                  <CardTitle>Bersih itu sehat!!</CardTitle>
                </CardHeader>
                <CardFooter>
                  <div className="ms-auto">
                    <Button
                      variant={"secondary"}
                      className="hover:text-primary transition-all duration-300 mr-2"
                    >
                      Lihat detail
                    </Button>
                    <Button>Ikuti</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
