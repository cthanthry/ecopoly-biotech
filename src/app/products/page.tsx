"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";


const products = [
  { src: "/product/bacterial-cellulose.jpg", desc: "Bacterial cellulose is a natural, pure form of cellulose made by special bacteria that turn sugars into tiny fibers, creating a strong, gel-like material." },
  { src: "/product/customize-design.jpg", desc: "A customized bacterial cellulose packaging for tempeh can be designed as a breathable, biodegradable film or pouch that maintains freshness, prevents contamination, and allows natural fermentation while eliminating plastic waste." },
  { src: "/product/straw.jpg", desc: "A straw made of modified bacterial cellulose sheets is biodegradable, durable, and water-resistant, offering a sustainable alternative to plastic straws. It maintains structural integrity in liquids while being eco-friendly and compostable." },
  { src: "/product/material.jpg", desc: "Bacterial cellulose is superior in packaging because it is biodegradable, highly durable, flexible, and can be engineered for sustainable, plastic-free solutions with excellent moisture resistance and strength." },
  { src: "/product/pouch.jpg", desc: "Bacterial cellulose can be customized into eco-friendly packaging by adjusting its thickness, flexibility, and barrier properties to create biodegradable films, coatings, or structural materials that replace plastic." },
  { src: "/product/temphe-pacakage.jpg", desc: "A biodegradable, breathable bacterial cellulose pouch designed for tempeh, featuring a semi-transparent, eco-friendly structure that supports natural fermentation while protecting freshness and reducing plastic waste." },
  { src: "/product/temphe-pouch.jpg", desc: "A comparative prototype design for tempeh packaging features a conventional plastic pouch with airtight sealing versus a biodegradable bacterial cellulose pouch that is breathable, eco-friendly, and supports natural fermentation while reducing waste." },
  { src: "/product/biomaterial.jpg", desc: "A shape-memory biomaterial created by combining bacterial cellulose (BC) with other biopolymers. This composite responds to stimuli like temperature or moisture, allowing it to return to its original shape while remaining biocompatible and biodegradable." },
  { src: "/product/oil-adsorbent.jpg", desc: "A bacterial cellulose composite with oil adherence capacity which is useful for oil spill cleanup, filtration, and controlled release applications. It provides an eco-friendly and efficient solution for oil absorption and separation." },
  { src: "/product/customizable-pouches.jpg", desc: "Bacterial cellulose composite material tailored for diverse packaging applications, flexible, and durable solutions for food, cosmetics, and sustainable product packaging. It provides excellent barrier properties, moisture resistance, and structural adaptability to replace conventional plastics." },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-items-center h-screen w-screen inset-0 bg-[url('/cloud.jpeg')] bg-cover bg-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col min-h-screen w-full items-center overflow-y-auto no-scrollbar">
      <section className="flex flex-col w-full h-full px-8 items-center">
        <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="flex gap-6" 
          columnClassName="my-masonry-grid_column pt-20">

          {products.map((product, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-xl p-4 mb-6 group">
              <Image 
                src={product.src} 
                alt="Product" 
                width={300} 
                height={400} 
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 flex items-center justify-center p-6 overflow-y-auto">
              <div className="p-4">
                <p className="text-white text-lg text-center">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        </section>
      </main>
    </div>
  );
}

