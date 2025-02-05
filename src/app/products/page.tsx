"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";


const products = [
  { src: "/productimages/BC 1.jpg", desc: "Bacterial cellulose is a natural, pure form of cellulose made by special bacteria that turn sugars into tiny fibers, creating a strong, gel-like material." },
  { src: "/productimages/BC customize design.jpg", desc: "A customized bacterial cellulose packaging for tempeh can be designed as a breathable, biodegradable film or pouch that maintains freshness, prevents contamination, and allows natural fermentation while eliminating plastic waste." },
  { src: "/productimages/BC material.jpg", desc: "Bacterial cellulose is superior in packaging because it is biodegradable, highly durable, flexible, and can be engineered for sustainable, plastic-free solutions with excellent moisture resistance and strength." },
  { src: "/productimages/BC pouch.jpg", desc: "Bacterial cellulose can be customized into eco-friendly packaging by adjusting its thickness, flexibility, and barrier properties to create biodegradable films, coatings, or structural materials that replace plastic." },
  { src: "/productimages/BC temphe pacakage.jpg", desc: "A biodegradable, breathable bacterial cellulose pouch designed for tempeh, featuring a semi-transparent, eco-friendly structure that supports natural fermentation while protecting freshness and reducing plastic waste." },
  { src: "/productimages/BC Temphe pouch.jpg", desc: "A comparative prototype design for tempeh packaging features a conventional plastic pouch with airtight sealing versus a biodegradable bacterial cellulose pouch that is breathable, eco-friendly, and supports natural fermentation while reducing waste." },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-items-center h-screen w-screen inset-0 bg-[url('/cloud.jpeg')] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col min-h-screen w-full items-center overflow-y-auto no-scrollbar">
        <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="flex gap-6" 
          columnClassName="my-masonry-grid_column pt-16">

          {products.map((product, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg p-4 mb-6 group">
              <Image 
                src={product.src} 
                alt="Product" 
                width={300} 
                height={400} 
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 flex items-center justify-center p-6">
                <p className="text-white text-lg text-center">{product.desc}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </main>
    </div>
  );
}

