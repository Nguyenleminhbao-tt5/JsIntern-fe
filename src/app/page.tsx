"use client";

import CardLeft from "@/components/card-left/page";
import CardRight from "@/components/card-right/page";

export default function Home() {
  return (
    <div className=" fixed top-0 left-0 bottom-0 right-0 z-2  flex flex-col md:flex-row  md:h-full items-center justify-center text-black overflow-y-scroll scrollbar-hide ">
      <CardLeft title="Our Products" />
      <CardRight title="Your Cart" />
    </div>
  );
}
