"use client";

import { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import mobApp from "../assets/images/mobApp.jpg";
import website from "../assets/images/website.jpg";
import custom from "../assets/images/customWebsite.jpg";
import consulting from "../assets/images/consulting.jpg";

interface Feature {
  title: string;
  description: string;
  img?: any;
}

const features: Feature[] = [
  {
    title: "Website Development",
    description:
      "Build a strong foothold in the digital world with a highly responsive, mobile-friendly website.",
    img: website,
  },
  {
    title: "Custom Software Development",
    description:
      "Elevate your business with customized software tailored to your specific business requirements.",
    img: custom,
  },
  {
    title: "Product Consulting",
    description:
      "Impress your users with an eye-pleasing and user-friendly UI/UX design.",
    img: consulting,
  },
  {
    title: "AI/ML Applications",
    description:
      "Harness the power of AI/ML to provide exceptional user experiences with advanced features.",
  },
];

interface TiltCardProps {
  children: ReactNode;
}

const TiltCard: React.FC<TiltCardProps> = ({ children }) => {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Max tilt angle
        speed: 400, // Transition speed
        glare: true, // Enable glare effect
        "max-glare": 0.3, // Max glare opacity
      });
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden shadow-lg"
    >
      {children}
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center font-extrabold text-5xl sm:text-6xl tracking-tighter uppercase">
          Everything You Need
        </h2>
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First Full-Width Card */}
          <div className="col-span-full">
            <TiltCard>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src={mobApp}
                  alt="Mobile App Development"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70 group-hover:opacity-90 transition duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
                <h3 className="text-2xl font-extrabold uppercase tracking-tighter">
                  Mobile App Development
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Win the hearts of your audience with gorgeous, captivating,
                  and high-performance mobile apps. More importantly, win more
                  customers!
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Remaining Cards */}
          {features.map((service) => (
            <TiltCard key={service.title}>
              {/* Background Image */}
              {service.img && (
                <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
                  <Image
                    src={service.img}
                    alt={`${service.title} image`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70 group-hover:opacity-90 transition duration-300"
                  />
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
                <h3 className="text-2xl font-extrabold uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {service.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};
