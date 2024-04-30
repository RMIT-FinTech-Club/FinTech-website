import React from "react";

type HeaderTitlePageProps = {
  text: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
  const [first, middle, last] = text.split(" ");

  return (
    <section className="flex justify-center my-4 mx-auto items-center max-w-4xl w-full">
      <div className="relative flex items-center w-full">
        {/* Left arrow */}
        <div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64" />
        <div className="absolute bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full" />
      </div>
      {/* Text with spacing adjustments */}
      <div className="flex mx-8 xl:mx-16 text-center w-full">
        <h5 className="uppercase text-ft-primary-blue-500 font-bold flex-grow px-2">
          {first}
        </h5>
        <h5 className="uppercase text-ft-primary-yellow font-bold flex-grow px-2">
          {middle}
        </h5>
        <h5 className="uppercase text-ft-primary-blue-500 font-bold flex-grow px-2">
          {last}
        </h5>
      </div>
      {/* Right arrow*/}
      <div className="relative flex items-center invisible lg:visible">
        <div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64" />
        <div className="bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full" />
      </div>
    </section>
  );
};

export default HeaderTitlePage;
