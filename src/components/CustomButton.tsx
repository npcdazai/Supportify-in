import { FC } from "react";
import Image from "next/image";

interface LetsTalkButtonProps {
  isLink?: boolean;
  children: React.ReactNode;
}

const LetsTalkButton: FC<LetsTalkButtonProps> = ({ isLink = false, children }) => {
  return (
    <>
      {isLink ? (
        <a
          href="#"
          className="bg-[#e5195e] px-[56px] py-[10px] text-white font-manrope font-semibold text-center leading-[27.24px] text-base transition-all duration-500 relative inline-flex items-center no-underline hover:before:w-[7px] hover:after:w-full hover:after:w-[100%] hover:after:h-full"
        >
          {children}
          <span className="absolute top-[7px] right-[-7px] border-t-[1px] border-[#e5195e] w-0 h-full transition-all duration-500"></span>
          <span className="absolute bottom-[-7px] left-[7px] bg-[#e5195e] w-[1px] h-0 transition-all duration-500"></span>
        </a>
      ) : (
        <button
          className="bg-[#e5195e] px-[56px] py-[10px] text-white font-manrope font-semibold text-center leading-[27.24px] text-base transition-all duration-500 relative inline-flex items-center"
        >
          {children}
          <span className="absolute top-[7px] right-[-7px] border-t-[1px] border-[#e5195e] w-0 h-full transition-all duration-500"></span>
          <span className="absolute bottom-[-7px] left-[7px] bg-[#e5195e] w-[1px] h-0 transition-all duration-500"></span>
        </button>
      )}
    </>
  );
};

const SmallButtonWithArrow: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="flex items-center font-manrope text-[16px] font-medium">
      {children}
      <Image src="/path/to/arrow-up.svg" alt="Arrow Up" className="transition-all duration-500 ml-2" width={16} height={16} />
    </span>
  );
};

interface AppProps {
  Context: React.ReactNode;
  imgs: React.ReactNode;
}

const App: FC<AppProps> = ({ Context, imgs }) => {
  return (
    <div>
      <LetsTalkButton isLink>{Context}</LetsTalkButton>
      <SmallButtonWithArrow>{imgs}</SmallButtonWithArrow>
    </div>
  );
};

export default App;
