import Image from "next/image";
import React from "react";
import HeroBg from '@/public/hero.jpg'
import Button from "./Button";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-2 h-[90vh]">
        <div className="pt-[150px] px-12 space-y-5 ">
            <h1 className="text-6xl font-bold leading-tight text-[#08382f]">Connect,Share, and Thrive with Your Campus Community</h1>
            <p className="text-2xl text-[#555] ">UniVerse helps you connect with peers, share your emotions, collaborate on projects, and grow your professional network - all within your collage Community.</p>
            <div className="space-x-4 pt-16">
            <Button colorClass='bg-[#1ABC9C] hover:bg-[#0a4b3e] text-white'>Join uniVerse Today</Button>
            <Button colorClass={'bg-white hover:bg-black hover:text-white'}>Explore Features</Button>

            </div>
        </div>
        <div className=" relative h-[100vh]">
            <Image src={HeroBg} fill alt="hero background"  placeholder="blur" quality={90}/>
        </div>
      </div>
    </section>
  );
}
