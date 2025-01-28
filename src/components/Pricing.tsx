"use client";
import CheckIcon from "@/assets/icons/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Budget Friendly",
    monthlyPrice: 0,
    des: "Our Business Analysis Team Can Help You Document Your Project and Give You a Resonable Price Quote",
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Dedicated Team",
    monthlyPrice: 9,
    des: "A Dedicated Resource Where You Can Implement the Agile Scrum Development Methodology and Review the Progress.",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Time And Material",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    des: "Our Project Managers Will Advise on the Importance, Level of Complexity and Way of Implementation.",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white">
      <div className="container ">
        <div className="section-heading  ">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex   flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
              des,
            }) => (
              <div
                key={monthlyPrice}
                className={twMerge(
                  "card border border-white/30 p-4 rounded-2xl ",
                  inverse === true && "text-white"
                )}
              >
                <div className="flex  justify-between ">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-white",
                      inverse === true && "text-white"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  {/* <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span> */}
                  <span className="tracking-tight font-bold text-white/50">
                    {des}
                  </span>
                </div>
                <div className="relative flex items-center mt-4 justify-center">
                  <div
                    className="absolute inset-0 blur-xl opacity-80 animate-pulse"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(248,123,255,0.8) 0%, rgba(47,216,255,0.4) 100%)",
                    }}
                  ></div>

                  {/* Glassmorphic Button */}
                  <button className="relative px-6 py-3 font-semibold text-white rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    {buttonText}
                  </button>
                </div>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
