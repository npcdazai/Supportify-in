import Image from "next/image";
import Link from "next/link";
import React from "react";
import aiml from "../assets/icons/aiml.png";
import hybrid from "../assets/icons/hybrid.png";
import ios from "../assets/icons/ios.png";
import mob from "../assets/icons/mob.png";
import { commonStyles } from "../styles/commonStyles";

interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Transforming concepts into captivating mobile experiences with our expert app development services.",
    buttonText: "Let’s build an App",
    buttonLink: "/mobile-app",
  },
  {
    id: 2,
    title: "Hybrid App Development",
    description:
      "Building versatile apps that work across platforms to ensure a seamless user experience.",
    image: hybrid.src,
  },
  {
    id: 3,
    title: "iOS App Development",
    description:
      "Creating high-quality iOS applications tailored to your needs.",
    image: ios.src,
  },
  {
    id: 4,
    title: "Android App Development",
    description:
      "Developing responsive Android applications to reach a wider audience.",
    image: mob.src,
  },
  {
    id: 5,
    title: "AI/ML Applications",
    description:
      "Leveraging AI and ML to build intelligent and predictive mobile applications.",
    image: aiml.src,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-12 flex flex-col items-center gap-5">
        <h2 className="text-center text-white font-extrabold text-5xl sm:text-6xl tracking-tighter uppercase">
          Everything You Need
        </h2>
        <div className="flex justify-between h-full gap-4 w-full">
          {servicesData.slice(0, 1).map((service) => (
            <div
              key={service.id}
              className={`group flex w-2/3 justify-between items-center bg-black gap-5 h-[250px] relative border py-1 px-2 rounded-lg border-white/30 overflow-hidden ${commonStyles}`}
            >
              <div className="w-1/2 flex flex-col justify-between h-[283px] p-8 gap-2">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                {service.buttonText && service.buttonLink && (
                  <Link href={service.buttonLink}>
                    <div className="relative w-[200px] mb-4 ">
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
                          {service.buttonText}
                        </button>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={348}
                  height={261}
                />
              )}

              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent after:content-[''] after:absolute after:w-full after:h-1 after:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] after:scale-x-0 after:origin-left after:transition-transform after:duration-1000 group-hover:after:scale-x-100" />
            </div>
          ))}
          <div className="flex flex-col border py-1 px-2 rounded-lg border-white/30 bg-black w-1/3 h-[250px] justify-between relative group overflow-hidden">
            <div className="p-8">
              <Image
                src={servicesData[1].image || ""}
                alt="Service Icon"
                width={48}
                height={38}
              />
            </div>
            <div
              className={`w-full flex flex-col h-[283px] px-8 gap-4 rounded-lg  ${commonStyles}`}
            >
              <h3 className="text-white font-semibold text-lg">
                {servicesData[1].title}
              </h3>
              <p className="text-gray-400">{servicesData[1].description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent after:content-[''] after:absolute after:w-full after:h-1 after:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] after:scale-x-0 after:origin-left after:transition-transform after:duration-1000 group-hover:after:scale-x-100" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4  w-full">
          {servicesData.slice(2).map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col bg-black w-2/5 h-[250px] border py-1 px-2 border-white/30 justify-between items-start rounded-lg relative overflow-hidden ${commonStyles}`}
            >
              <div className="p-8">
                {service.image && (
                  <Image
                    src={service.image}
                    alt="Service Icon"
                    width={48}
                    height={38}
                  />
                )}
              </div>
              <div className="w-full flex flex-col h-full px-8 gap-6">
                <h3 className="text-white font-semibold text-lg leading-[25px]">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base leading-[23px]">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent after:content-[''] after:absolute after:w-full after:h-1 after:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] after:scale-x-0 after:origin-left after:transition-transform after:duration-1000 group-hover:after:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
