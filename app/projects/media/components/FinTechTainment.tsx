import React from 'react';
import PodcastCard from './PodcastCard';

const FinTechTainment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8 uppercase text-[#2b305e]">
        FinTechTainment
      </h1>
      <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-4/5 mx-auto font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ut. Quos sunt expedita ut eum delectus
        ducimus doloribus officia repudiandae neque, dolor dolorum voluptatum, non ratione aliquam molestias! Possimus,
        perferendis!
      </p>
      <div className="w-1/5 h-1 bg-black my-8 mx-auto"></div>
      <section className="w-full flex justify-center mt-8">
        <div className="flex flex-wrap justify-center items-center gap-12 w-full max-w-screen-xl px-4">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </section>
    </div>
  );
};

export default FinTechTainment;