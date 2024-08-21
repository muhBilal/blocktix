import Wrapper from "@/components/Wrapper";

export default function Home() {
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
        <div className="flex justify-center mt-16 gap-5">
          <article className="rounded-xl border-2 border-gray-100 bg-white w-80 h-40">
            <div className="flex items-start gap-4 p-4">
              <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="size-32 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    {" "}
                    Seminar{" "}
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, accusantium temporibus iure delectus ut totam natus
                  nesciunt ex? Ducimus, enim.
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-xl border-2 border-gray-100 bg-white w-80 h-40">
            <div className="flex items-start gap-4 p-4">
              <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="size-32 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    {" "}
                    Seminar{" "}
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, accusantium temporibus iure delectus ut totam natus
                  nesciunt ex? Ducimus, enim.
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-xl border-2 border-gray-100 bg-white w-80 h-40">
            <div className="flex items-start gap-4 p-4">
              <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="size-32 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    {" "}
                    Seminar{" "}
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, accusantium temporibus iure delectus ut totam natus
                  nesciunt ex? Ducimus, enim.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </Wrapper>
  );
}
