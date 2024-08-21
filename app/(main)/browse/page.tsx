import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/Sidebar";

import React from "react";

export default function page() {
  return (
    <Wrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="flex flex-col items-center gap-5 ">
          <h1 className="text-4xl font-semibold">
            2826 Lowongan Tersedia Saat ini
          </h1>
          <p className="text-lg">
            A platform where you can get your desired job without any hassle{" "}
          </p>
          <div className="relative flex items-center rounded-lg overflow-hidden mt-5">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-4 w-96 focus:outline-none rounded-full"
            />
            <button className="absolute right-0 bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-start mt-10 gap-10">
          <div className="">
            <p className="text-2xl font-semibold">Filter Lanjutan</p>
            <hr />

            <p className="text-2xl font-semibold mt-5">Jenis Event</p>
            <div className="mt-4 space-y-2">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-black">
                    {" "}
                    John Clapton{" "}
                  </strong>
                </div>
              </label>

              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-black">
                    {" "}
                    Peter Mayer{" "}
                  </strong>
                </div>
              </label>

              <label
                htmlFor="Option3"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option3"
                  />
                </div>

                <div>
                  <strong className="font-medium text-black">
                    {" "}
                    Eric King{" "}
                  </strong>
                </div>
              </label>
            </div>
          </div>
          <div className="flex gap-5">
            <article className="overflow-hidden rounded-lg shadow transition w-60 hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg shadow transition w-60 hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg shadow transition w-60 hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
