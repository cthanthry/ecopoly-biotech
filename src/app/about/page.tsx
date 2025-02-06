import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GiCardboardBox } from "react-icons/gi";
import { FaLeaf, FaHandshake } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex flex-col inset-0 h-screen w-screen items-center justify-center bg-[url('/cloud.jpeg')] bg-cover bg-center p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col min-h-screen w-full items-center justify-start pt-20 gap-4 overflow-y-auto no-scrollbar lg:pt-36">
        <section className="flex flex-col md:w-[80%] lg:w-[60%]">
          <div className="w-full flex flex-col items-center justify-center bg-green-700 px-2 py-8 gap-4 rounded-xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bebas font-extrabold text-white">
              About Us
            </h1>
            <p className="font-semibold text-sm md:text-2xl lg:text-4xl text-white">
              Pioneering the Future of Sustainable Biomaterials
            </p>
          </div>
            <p className="text-sm text-black text-center py-8 lg:py-16 md:text-lg lg:text-2xl">
              At Ecopoly Biotech, we are committed to transforming the world of
              materials with bacterial cellulose (BC)—a natural, biodegradable,
              and eco-friendly alternative to plastic. Our mission is to
              eliminate single-use plastic waste by offering high-performance,
              biodegradable, and eco-friendly alternatives using bacterial
              cellulose, while fostering socio-economic development through
              sustainable innovation and responsible production.
            </p>
          <div className="flex flex-col p-4 py-8 lg:py-16 border-b-2 border-black">
            <h2 className="text-2xl font-bold lg:text-4xl text-green-700">
              Vision
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl pt-4 text-black">
              A world where sustainable biomaterials replace harmful single-use
              plastics, creating a greener and healthier future.
            </p>
          </div>
          <div className="flex flex-col p-4 border-b-2 border-black">
            <h2 className="text-2xl lg:text-4xl font-bold text-green-700">
              Mission
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl pt-4 text-black">
              To eliminate single-use plastic waste by offering
              high-performance, biodegradable, and eco-friendly alternatives
              using bacterial cellulose, while fostering socio-economic
              development through sustainable innovation and responsible
              production.
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full items-center py-8 lg:py-16 md:w-[80%] lg:w-[60%]">
          <h2 className="text-4xl lg:text-6xl font-bebas font-bold text-green-700">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 w-full px-4">
            <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white shadow-md">
              <div className="w-36 h-48 relative">
                <Image
                  src="/team/Dr Vidya SM.png"
                  alt="Dr Vidya SM"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-sm text-green-700 lg:text-2xl font-semibold mt-2">
                Dr. VIDYA S.M
              </p>
              <p className="text-xs text-black lg:text-lg">
                (Chairman) Founder
              </p>
              <p className="text-xs text-neutral-700 lg:text-sm text-center">
                Production and characterization of Biopolymers - 10 years
                experience
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white shadow-md">
              <div className="w-36 h-48 relative">
                <Image
                  src="/team/Mrs Chandrika Tantry.png"
                  alt="Mrs Chandrika Tantry"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-sm text-green-700 lg:text-2xl font-semibold mt-2">
                CHANDRIKA S TANTRY
              </p>
              <p className="text-xs text-black lg:text-lg">(CEO) Founder</p>
              <p className="text-xs text-neutral-700 lg:text-sm text-center">
                2 years of research on polymers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white shadow-md">
              <div className="w-36 h-48 relative">
                <Image
                  src="/team/Dr Santhosh Poojary.png"
                  alt="Dr Santhosh Poojary"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-sm text-green-700 lg:text-2xl font-semibold mt-2">
                Dr. SANTHOSH POOJARY
              </p>
              <p className="text-xs text-black lg:text-lg">
                (Managing Partner)
              </p>
              <p className="text-xs text-neutral-700 lg:text-sm text-center">
                Starch bioplastic production (2 years experience) and Pilot
                Biofuel (12 years)
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-5 py-8 gap-y-16 lg:gap-y-24 md:w-[80%] lg:w-[60%]">
          <div className="p-2 lg:p-4 col-span-2 flex items-center justify-center text-xl text-center text-green-700 font-bebas font-semibold border-r border-black">
            <h2 className="md:text-2xl lg:text-6xl">Our Journey</h2>
          </div>
          <div className="p-2 lg:p-4 col-span-3">
            <p className="text-black text-sm text-center lg:text-2xl">
              Driven by the urgent need to combat microplastic pollution, we
              embarked on a mission to create a better, safer, and greener
              alternative to conventional single-use plastics. Through years of
              research and innovation, we have developed bacterial
              cellulose-based solutions that are not only biodegradable and
              customizable but also durable and versatile for multiple
              industries.
            </p>
          </div>
          <div className="p-2 lg:p-4 col-span-3">
            <p className="text-black text-sm text-center lg:text-2xl">
              We specialize in producing high-quality BC biomaterials that cater
              to a wide range of applications, including packaging, textiles,
              cosmetics, and medical products. By working closely with
              businesses, we deliver tailor-made solutions that align with their
              sustainability goals.
            </p>
          </div>
          <div className="p-2 lg:p-4 col-span-2 flex items-center justify-center text-xl text-center text-green-700 font-bebas font-semibold border-l border-black">
            <h2 className="md:text-2xl lg:text-6xl">What We Do</h2>
          </div>
          <div className="p-2 lg:p-4 col-span-2 flex items-center justify-center text-xl text-center text-green-700 font-bebas font-semibold border-r border-black">
            <h2 className="md:text-2xl lg:text-6xl">Our Commitment to Sustainability</h2>
          </div>
          <div className="p-2 lg:p-4 col-span-3">
            <p className="text-black text-sm text-center lg:text-2xl">
              We believe in a world where plastic waste is a thing of the past.
              Hence our entire production process is designed to be
              eco-conscious, circular, and resource-efficient—ensuring that
              every material we create leaves a positive impact on the
              environment.
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full py-8 md:w-[80%] lg:pt-24 lg:w-[60%]">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-4xl text-green-700 font-bebas font-bold p-2 lg:text-6xl">
              Our Key Offerings
            </h2>
            <div className="grid grid-cols-2 w-full gap-4 lg:gap-14 lg:grid-cols-4 lg:pt-8">
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
                  Eco-Friendly Packaging
                </p>
                <div className="p-2">
                  <GiCardboardBox className="text-5xl text-white" />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
                  Sustainable Alternatives
                </p>
                <div className="p-2">
                  <FaLeaf className="text-5xl text-white" />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
                  Customizable Biomaterial Solutions
                </p>
                <div className="p-2">
                  <FiSettings className="text-5xl text-white" />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center rounded-xl bg-green-700 p-2 gap-2 lg:gap-8 lg:py-8">
                <p className="text-lg text-center font-semibold lg:text-2xl text-white">
                  Technology Licensing & Partnerships
                </p>
                <div className="p-2">
                  <FaHandshake className="text-5xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-green-700 p-4 border rounded-xl mb-10 md:w-[80%] lg:w-[60%]">
          <h3 className="text-xl lg:text-4xl font-bold text-center mb-10 text-white">
            Company Details
          </h3>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-sm lg:text-xl text-left">
              <strong>Company Name:</strong> Ecopoly Biotech LLP
            </p>
            <p className="text-sm lg:text-xl text-left">
              <strong>Founded:</strong> 2023
            </p>
            <p className="text-sm lg:text-xl text-left">
              <strong>Headquarters:</strong> Karkala, Udupi, Karnataka
            </p>
            <p className="text-sm lg:text-xl text-left">
              <strong>Industry:</strong> Biomaterials & Sustainable Packaging
            </p>
            <p className="text-sm lg:text-xl text-left">
              <strong>Specialization:</strong> Bacterial Cellulose (BC)
              Production for Packaging, Textiles, Cosmetics, and Medical
              Applications
            </p>
            <p className="text-sm lg:text-xl text-left">
              <strong>Business Model:</strong> B2B & B2C - Providing
              Sustainable, Biodegradable, and Customizable Biomaterial Solutions
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-4 w-full py-8 lg:grid-cols-2 md:w-[80%] lg:w-[60%]">
          <div className="col-span-1 flex flex-col bg-green-700 p-4 rounded-xl text-white text-start">
            <h2 className="text-2xl font-bold lg:text-4xl mb-4">Address</h2>
            <p className="text-sm lg:text-xl">
              ECOPOLY BIOTECH LLP <br></br>Door No. BM 1-22/3A (Previous No.
              1-17/6) Ground Floor, Sri Ram Building, Belman Post, Belmannu,
              Karkala Police Station, Karkala, Udupi- 576111, Karnataka, India
            </p>
          </div>
          <div className="col-span-1 flex flex-col bg-green-700 p-4 rounded-xl text-white text-start">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Contact Us</h2>

            <div className="flex items-center gap-2">
              <BsTelephone className="text-xl lg:text-2xl" />
              <a
                href="tel:+918660943004"
                className="text-sm lg:text-xl hover:underline"
              >
                +91 8660943004
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <MdOutlineEmail className="text-xl lg:text-2xl" />
              <a
                href="mailto:ecopolybiotech@gmail.com"
                className="text-sm lg:text-xl hover:underline"
              >
                ecopolybiotech@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
