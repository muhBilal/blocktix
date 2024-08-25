import Wrapper from "@/components/Wrapper";
import { BookmarkCheck, Clock, Files, TagIcon } from "lucide-react";
import Image from "next/image";

import React from "react";

export default function page() {
  return (
    <Wrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="flex flex-col items-center gap-5 px-44 py-16 bg-blue-50 mb-8 rounded-lg relative">
          <Image
            src={"/undraw_globe.svg"}
            alt="icon-chart"
            width={210}
            height={210}
            className="absolute bottom-0 left-0 ml-7"
          />
          <Image
            src={"/undraw_welcoming.svg"}
            alt="icon-search"
            width={180}
            height={180}
            className="absolute right-0 bottom-0 mr-5"
          />
          <h1 className="text-4xl font-semibold">
            2826 Lowongan Tersedia Saat ini
          </h1>
          <p className="text-lg">
            A platform where you can get your desired job without any hassle{" "}
          </p>
          <div className="relative flex items-center overflow-hidden mt-5 rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-4 w-96 focus:outline-none  "
            />
            <button className="absolute right-0 bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
              Search
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex">
            <div className="w-1/4">
              <div className="mb-3">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-xl">Filter</h5>

                  <span className="ml-32 cursor-pointer text-blue-500 font-base">
                    Reset
                  </span>
                </div>

                <hr className="mt-2" />
              </div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-2 ">
                  Tingkat Pendidikan
                </h5>
                <div>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={1}
                      />
                      <span>SD</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={2}
                      />
                      <span>SMP</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={3}
                      />
                      <span>SMA</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={4}
                      />
                      <span>D3</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={5}
                      />
                      <span>S1</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={6}
                      />
                      <span>S2</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group1"
                        value={7}
                      />
                      <span>S3</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-2 ">Tipe Event</h5>
                <div>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={1}
                      />
                      <span>Seminar</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={2}
                      />
                      <span>Lomba</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={3}
                      />
                      <span>Workshop</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={4}
                      />
                      <span>Beasiswa</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        className="transform scale-150 mr-2"
                        name="group2"
                        value={5}
                      />
                      <span>Bootcamp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-20 ml-6">
                <div className=" bg-blue-50 h-72 w-56 rounded-lg">
                  <div className="flex flex-col justify-center items-center h-[30%]">
                    <div className="flex">
                      {/* <!-- Logo (1/4) --> */}
                      <div className="w-1/4 flex items-center justify-center">
                        <img src="logo.png" alt="Logo" className="w-12 h-12" />
                      </div>
                      {/* <!-- Nama dan Lokasi Perusahaan (3/4) --> */}
                      <div className="w-3/4 pl-2">
                        <h3 className="text-lg font-semibold">
                          PT. Helvi Studio
                        </h3>
                        <p className="text-sm text-gray-600">Kota Surabaya</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Bagian Bawah 70% --> */}
                  <div className="h-[70%] flex flex-col justify-center items-center">
                    {/* <!-- Judul Posisi dan Lokasi --> */}
                    <div className="flex flex-col items-start mt-10">
                      <h5 className="text-base font-bold mb-2">
                        Web Developer - Surabaya
                      </h5>
                      <div className="flex flex-wrap mb-1 ">
                        <div className="flex mr-4 gap-1">
                          <TagIcon />
                          <p className="text-sm">Seminar</p>
                        </div>
                        <div className="flex gap-1">
                          <Files />
                          <p className="text-sm">Page</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Clock />
                        <p className="text-sm">2h ago</p>
                      </div>
                    </div>
                    {/* <!-- Tombol Claim dan Icon Simpan --> */}
                    <div className="flex justify-between items-center mt-auto">
                      <button className="bg-blue-500 text-white px-12 py-2 rounded-lg mb-3">
                        Claim
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 ml-3 mb-3">
                        <BookmarkCheck />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
