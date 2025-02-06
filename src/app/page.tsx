import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col inset-0 h-screen w-screen items-center justify-center bg-[url('/cloud.jpeg')] bg-cover bg-center p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col min-h-screen w-full items-center justify-start pt-20 gap-4 overflow-y-auto scroll-smooth no-scrollbar lg:pt-36">
        <section className="flex flex-col md:w-[80%] lg:w-[60%]">
          <div className="flex flex-col w-full pb-6 lg:flex-row">
            <div className="hidden lg:block px-8">
              <Image src={"logo.svg"} alt="Logo" width={300} height={300} />
            </div>
            <div className="flex flex-col w-full items-center justify-center bg-green-700 px-2 py-8 gap-4 rounded-xl">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bebas font-extrabold text-white">
                Ecopoly Biotech LLP
              </h1>
              <p className="font-semibold text-sm text-center md:text-xl lg:text-4xl text-white">
                The Future of Sustainable Biomaterials
              </p>
            </div>
          </div>
          <div className="pt-2 lg:py-16">
            <p className="text-sm text-black text-center md:text-md lg:text-2xl">
              Bacterial Cellulose (BC) is a game-changing biomaterial derived
              from natural fermentation, offering superior strength,
              flexibility, and biodegradability. Unlike traditional materials
              containing plant cellulose with chemical treatment involved like
              bleaching, BC is free from chemical processing , compostable, and
              designed for next-generation packaging and product solutions
            </p>
          </div>
          <div className="flex flex-col w-full items-center lg:border-t-2 lg:border-black py-6 lg:pt-24">
            <h2 className="text-2xl text-green-700 font-bebas font-bold p-2 md:text-4xl lg:text-6xl">
              Why Choose BC Over Plastic?
            </h2>
            <div className="grid grid-cols-2 w-full gap-4 lg:gap-14 md:grid-cols-4 lg:pt-8">
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
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
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
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
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
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
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold px-6 md:px-0 lg:text-2xl text-white">
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
        <section className="grid grid-cols-2 py-6 lg:py-24 md:w-[70%]">
          <div className="p-2 col-span-1 flex items-center justify-center text-xl text-center text-green-700 font-bebas font-semibold border-r lg:border-r-2 border-black lg:p-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl">
              A Sustainable Choice for a Better Future
            </h2>
          </div>
          <div className="p-2 col-span-1 lg:p-8">
            <p className="text-black text-sm text-center lg:text-2xl">
              Our biomaterials provide an eco-friendly alternative that helps
              businesses and consumers reduce their environmental footprint.
              Whether you need customized solutions or scalable sustainable
              packaging, BC is the biodegradable answer to plastic pollution.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center pt-8 lg:w-[60%] pb-16 lg:pb-24">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-green-700 font-bebas">
            Explore More About Our Company
          </h2>
          <div className="grid grid-cols-2 w-full gap-x-6 py-6 lg:py-12 lg:px-32">
            <div className="col-span-1 flex justify-center lg:px-12">
              <Link
                href={"/products"}
                className="p-1 md:p-2 w-full bg-transparent text-green-700 text-lg md:text-xl lg:text-2xl font-semibold text-center border-2 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white"
              >
                Products
              </Link>
            </div>
            <div className="col-span-1 flex justify-center lg:px-12">
              <Link
                href={"/about"}
                className="p-1 md:p-2 w-full bg-transparent text-green-700 text-lg md:text-xl lg:text-2xl font-semibold text-center border-2 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white"
              >
                About Us
              </Link>
            </div>
          </div>
          <Image
            src={"/banner.svg"}
            alt="Logo banner"
            width={240}
            height={80}
          />
        </section>
      </main>
    </div>
  );
}
