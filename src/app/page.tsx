import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col inset-0 h-screen w-screen items-center justify-center bg-[url('/cloud.jpeg')] bg-cover bg-center p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col min-h-screen w-full items-center justify-start pt-16 gap-4 overflow-y-auto no-scrollbar lg:w-[60%] lg:pt-36">
        <section className="flex flex-col">
          <div className="flex lg:flex-row">
            <div className="hidden lg:block px-8">
              <Image src={"logo.svg"} alt="Logo" width={300} height={300} />
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-green-700 px-2 py-8 gap-4 rounded-lg">
              <h1 className="text-4xl lg:text-8xl font-bebas font-extrabold">
                Ecopoly Biotech LLP
              </h1>
              <p className="font-semibold text-sm lg:text-4xl">
                The Future of Sustainable Biomaterials
              </p>
            </div>
          </div>
          <div className="pt-2 lg:pt-16">
            <p className="text-sm text-black text-center lg:text-2xl">
              Bacterial Cellulose (BC) is a game-changing biomaterial derived
              from natural fermentation, offering superior strength,
              flexibility, and biodegradability. Unlike traditional materials
              containing plant cellulose with chemical treatment involved like
              bleaching, BC is free from chemical processing , compostable, and
              designed for next-generation packaging and product solutions
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full py-2 lg:pt-24">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-2xl text-green-700 font-bebas font-bold p-2 lg:text-6xl">
              Why Choose BC Over Plastic?
            </h2>
            <div className="grid grid-cols-2 w-full gap-4 lg:gap-14 lg:grid-cols-4 lg:pt-8">
              <div className="col-span-1 flex flex-col justify-center items-center rounded-lg bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl">
                  100% Biodegradable
                </p>
                <div className="p-2">
                  <Image
                    src={"/biodegradable-white.png"}
                    alt="Biodegradable logo"
                    width={40}
                    height={40}
                    className="lg:size-20"
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-lg bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl">
                  Eco Friendly Alternative
                </p>
                <div className="p-2">
                  <Image
                    src={"/eco-friendly-white.png"}
                    alt="Eco Friendly Alternative"
                    width={40}
                    height={40}
                    className="lg:size-20"
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-lg bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl">
                  Customizable & Versatile
                </p>
                <div className="p-2">
                  <Image
                    src={"/versatile-white.png"}
                    alt="Customizable Versatile"
                    width={40}
                    height={40}
                    className="lg:size-20"
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-lg bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold px-6 lg:text-2xl">
                  Non-Toxic & Safe
                </p>
                <div className="p-2">
                  <Image
                    src={"/safe-white.png"}
                    alt="Non-Toxic and Safe"
                    width={40}
                    height={40}
                    className="lg:size-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 py-2 lg:py-24">
          <div className="p-2 col-span-1 flex items-center justify-center text-xl text-center text-green-700 font-bebas font-semibold border-r border-black">
            <h2 className="lg:text-6xl">A Sustainable Choice for a Better Future</h2>
          </div>
          <div className="p-2 col-span-1">
            <p className="text-black text-sm text-center lg:text-2xl">
              Our biomaterials provide an eco-friendly alternative that helps
              businesses and consumers reduce their environmental footprint.
              Whether you need customized solutions or scalable sustainable
              packaging, BC is the biodegradable answer to plastic pollution.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
