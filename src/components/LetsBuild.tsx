"use client";

import ArrowIcon from "@/assets/icons/arrow-right.svg";
import cogImage from "@/assets/images/cog.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/noodle.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const LetsBuild: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[linear-gradient(to_bottom,#A46EDB_0%,#b06dcf_34%,#4F21A1_65%,#200D42_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="w-[50%]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Let&apos;s build something amazing together!
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              We put you at the centre of everything we do. Top class service
              and a memorable experience awaits.
            </p>
            <div className="relative w-[200px] mt-6">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FF)] blur-md"></div>

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 blur-xl opacity-80 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(248,123,255,0.8) 0%, rgba(47,216,255,0.4) 100%)",
                  }}
                ></div>

                {/* Glassmorphic Button */}
                <button className="relative px-6 py-3 font-semibold text-white rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                Let&apos;s Connect
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ rotate: 30, translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
