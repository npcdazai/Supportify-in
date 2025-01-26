import EcoSystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "IMobile App Development",
    description:
      "Win the hearts of your audience with gorgeous, captivating, and high performance mobile apps. More importantly, win more customers!",
  },
  {
    title: "Website Development",
    description:
      "Build a strong foothold in the digital world with a highly responsive, mobile-friendly website.",
  },
  {
    title: "Custom Software Development",
    description:
      "Elevate your business with customized software tailored to your specific business requirements.",
  },
  {
    title: "Product Consulting",
    description:
      "Impress your users with an eye-pleasing and user-friendly UI/UX design.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24  ">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((services) => {
            return (
              <div
                key={services.title}
                className="border border-white/30 px-5 py-10 text-center rounded-xl"
              >
                <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                  <EcoSystemIcon />
                </div>
                <h3 className="mt-6 font-bold">{services.title}</h3>
                <p className="mt-2 text-white/70">{services.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
