"use client";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { BookCopy, GraduationCap, Speech, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home({ params }: { params: { id: string } }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/browse?query=${encodeURIComponent(searchQuery)}`);
  };

  const cards1 = [
    {
      id: 1,
      jenisAcara: "Seminar",
      deskripsi:
        "Pertemuan edukatif berbagi pengetahuan mengenai topik tertentu",
      icon: <Speech width={60} height={60} />,
      bg: "#914F1E",
    },
    {
      id: 2,
      jenisAcara: "Lomba",
      deskripsi:
        "Pertandingan yang diadakan untuk menemukan pemenang dalam suatu bidang",
      icon: <Trophy width={50} height={50} />,
      bg: "#FABC3F",
    },
    {
      id: 3,
      jenisAcara: "Workshop",
      deskripsi: "Kegiatan pelatihan",
      icon: <Users width={50} height={50} />,
      bg: "#C7253E",
    },
  ];

  const cards2 = [
    {
      id: 1,
      jenisAcara: "Bootcamp",
      deskripsi: "Pelatihan intensif yang dilakukan dalam waktu singkat",
      icon: <BookCopy width={50} height={50} />,
      bg: "#7A1CAC",
    },
    {
      id: 2,
      jenisAcara: "Beasiswa",
      deskripsi: "Bantuan keuangan yang diberikan kepada seseorang",
      icon: <GraduationCap width={60} height={60} />,
      bg: "#00712D",
    },
  ];
  return (
    <Wrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl font-semibold">Find Your Remote Work</h1>
          <h1 className="text-6xl font-semibold">Easy And Fast</h1>
          <p className="text-lg">
            A platform where you can get your desired job without any hassle{" "}
          </p>
          <div className="relative flex items-center rounded-full overflow-hidden mt-5 shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-4 w-96 focus:outline-none rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              onClick={() => handleSearch()}
              className="absolute right-0 bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5 mb-5">
          {cards1.map((card) => (
            <article
              className="rounded-xl border-2 border-gray-100 bg-white"
              key={card.id}
            >
              <div className="flex items-start gap-4 p-4">
                <div>
                  {
                    <div
                      style={{ backgroundColor: card.bg }}
                      className={
                        "w-[128px] h-[128px] flex justify-center items-center rounded-lg text-white"
                      }
                    >
                      {card.icon}
                    </div>
                  }
                </div>

                <div>
                  <h3 className="font-medium sm:text-lg">{card.jenisAcara}</h3>

                  <p className=" text-sm text-gray-700">{card.deskripsi}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-5">
          {cards2.map((card) => (
            <article
              className="rounded-xl border-2 border-gray-100 bg-white w-[270px] h-[180px] "
              key={card.id}
            >
              <div className="flex items-start gap-4 p-4">
                <div>
                  {
                    <div
                      style={{ backgroundColor: card.bg }}
                      className={
                        "w-[128px] h-[128px] flex justify-center items-center rounded-lg text-white"
                      }
                    >
                      {card.icon}
                    </div>
                  }
                </div>

                <div>
                  <h3 className="font-medium sm:text-lg">
                    <a href="#" className="hover:underline">
                      {card.jenisAcara}
                    </a>
                  </h3>

                  <p className=" text-sm text-gray-700">{card.deskripsi}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Wrapper>
  );
}
