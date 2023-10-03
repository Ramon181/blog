import CardsBlog from "./cardsBlog/CardsBlog";

const SectionBlog = () => {
  const jsonPost = [
    {
      id: 1,
      title: "Espadas Azules",
      description: "No me interesan Espadas Azules",
      img: "https://fondosmil.com/fondo/65068.jpg",
    },
    {
      id: 2,
      title: "One Piece Se esta terminando",
      description:
        "One Piece ye esta en su cumbre es una de las mejores series animes del mundo",
      img: "https://img2.wallspic.com/crops/9/8/7/2/7/172789/172789-anime-manga-caricatura-animacion-manga_shonen-1920x1080.jpg",
    },
  ];
  return (
    <main className=" w-full mt-10 z-0">
      <div className="block w-full mt-20 md:flex md:space-x-2 px-2 lg:p-0">
        <a
          className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded-md inline-block h-[24rem]"
          href=""
        >
          <img
            src={jsonPost[0].img}
            className="absolute left-0 top-0 w-full h-full rounded-md z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 ">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {jsonPost[0].title}
            </span>
            <h2 className="text-4xl w-7/12 font-semibold text-gray-100 leading-tight">
              {jsonPost[0].description}
            </h2>
          </div>
        </a>

        <a
          className="w-full md:w-1/3 relative rounded-md h-[24em]"
          href="./blog.html"
        >
          <img
            src={jsonPost[1].img}
            className="absolute left-0 top-0 w-full h-full rounded-md z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {jsonPost[1].title}
            </span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
              {jsonPost[1].description}
            </h2>
          </div>
        </a>
      </div>

      {/* cartas */}
      <div className="block lg:flex lg:space-x-2 mt-10">
        <div className="w-full lg:w-[75%]">
          {jsonPost.map((post, index) => (
            <a
              key={index}
              className="flex flex-row rounded-md w-full bg-gray-100 lg:flex mb-10"
            >
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden"
                title="deit is very important"
              >
                <img
                  className=" rounded-l-md w-full h-full"
                  src={post.img}
                  alt=""
                />
              </div>
              <div className=" px-4 pb-4 pt-2 w-full flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-900 font-bold text-2xl mb-2">
                    {post.title}
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 max-w-[30rem]">
                    <p className="text-gray-900 text-base truncate">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className=" cursor-pointer flex justify-end">
                  <a className=" text-gray-900 font-semibold">Ver Mas</a>
                </div>
              </div>
            </a>
          ))}
          <CardsBlog />
        </div>
        <div className="w-full lg:w-[25%] px-3">
          <div className="mb-4">
            <h5 className=" text-lg uppercase text-gray-900 font-semibold px-1 mb-2">
              {" "}
              Series Populares{" "}
            </h5>
            <ul>
              <li className="px-1 py-4 border-b border-t font-semibold text-gray-900 hover:border-gray-200 transition duration-300">
                <a
                  href="#"
                  className="flex items-center text-gray-900 cursor-pointer"
                >
                  asjd
                  <span className="text-gray-900 font-semibold ml-auto">
                    5 articulos
                  </span>
                  <i className="text-gray-900 bx bx-right-arrow-alt ml-1"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400"
              >
                Latest
              </button>
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400"
              >
                Popular
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-700">
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/244x324"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Aenean ac tristique lorem, ut mollis dui.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    5 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Politics
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/245x325"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Nulla consectetur efficitur.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    14 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Sports
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/246x326"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Vitae semper augue purus tincidunt libero.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    22 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      World
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/247x327"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Suspendisse potenti.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    37 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Business
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default SectionBlog;
