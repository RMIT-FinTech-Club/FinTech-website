import React from "react";

type Sponsor = {
  logo: string;
};

type SponsorList = {
  gold: Sponsor[];
  silver: Sponsor[];
  inkind: Sponsor[];
};

const sponsors: SponsorList = {
  gold: [
    {
      logo: 'https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/fpt-security.png',
    },
    {
      logo: 'https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/payoo.png',
    },
  ],
  silver: [
    {
      logo: 'https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/moore-aisc.png',
    },
    {
      logo: 'https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/fipharmco.png',
    },
  ],
  inkind: [
    {
      logo: 'https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/esol-labs.png',
    },
  ],
};

const Sponsor: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full my-10">
      <h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">Our Sponsors</h1>
      <div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
      <div className="w-full flex flex-wrap">
        <div className="w-1/3 max-md:w-full mt-6">
          <h1 className="w-full text-center text-2xl font-bold mb-4">Silver Sponsors</h1>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <img key={index} src={sponsor.logo} alt="sponsor logo" width={200} className="min-w-[200px]" />
            ))}</div>
        </div>
        <div className="w-1/3 max-md:w-full mt-6">
          <h1 className="w-full text-center text-2xl font-bold mb-4">Gold Sponsors</h1>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {sponsors.gold.map((sponsor, index) => (
              <img key={index} src={sponsor.logo} alt="sponsor logo" width={200} className="min-w-[200px]" />
            ))}
          </div>
        </div>
        <div className="w-1/3 max-md:w-full mt-6">
          <h1 className="w-full text-center text-2xl font-bold mb-4">In-kind Sponsors</h1>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {sponsors.inkind.map((sponsor, index) => (
              <img key={index} src={sponsor.logo} alt="sponsor logo" width={200} className="min-w-[200px]" />
            ))}</div>
        </div>

      </div>
    </section>
  );
};

export default Sponsor;