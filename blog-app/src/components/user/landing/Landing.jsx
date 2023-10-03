import { useEffect, useState } from "react";

const Landing = () => {
  const [carrusel, setCarrusel] = useState(0);
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

  const runCarrusel = () => {
    setCarrusel(prevCarrusel => (prevCarrusel + 1) % jsonPost.length);
  };

  useEffect(() => {
    const interval = setInterval(runCarrusel, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header class="mt-16">
      
      <div class="container flex flex-col-reverse px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="flex flex-col-reverse items-center w-full lg:flex-row lg:w-1/2">
          <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {jsonPost.map((item, index) => (
              <button
                onClick={() => runCarrusel()}
                key={item.id}
                className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                  index === carrusel ? "bg-gray-900" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <div class="max-w-lg lg:mx-12 lg:order-2 ">
            <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {jsonPost[carrusel].title}
            </h1>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              {jsonPost[carrusel].description}
            </p>
            <div class="mt-3">
              <button class="bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span class="mx-auto">Learn More</span>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src={jsonPost[carrusel].img}
            alt="apple watch photo"
          />
        </div>
      </div>
    </header>
  );
};

export default Landing;
