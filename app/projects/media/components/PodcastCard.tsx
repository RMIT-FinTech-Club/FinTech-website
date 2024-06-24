const PodcastCard: React.FC = () => {
  return (
    <div className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[360px] aspect-[1/1.2] shadow-lg rounded-xl relative overflow-hidden group">
      <img
        src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/philip-an-podcast.png"
        alt="Avatar"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute h-[120px] bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white text-base md:text-lg lg:text-xl font-light transition-all duration-300 group-hover:h-auto group-hover:py-8">
        <h1 className="text-lg md:text-l lg:text-xl m-0">Episode 1: How FinTech promote sustainable finance?</h1>
        <p className="leading-normal mt-1 font-bold">Guest Speaker: Philip An</p>
        <p className="leading-normal mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          FinTech is a new industry that uses technology to improve activities in finance.
        </p>
      </div>
    </div>
  );
};

export default PodcastCard;