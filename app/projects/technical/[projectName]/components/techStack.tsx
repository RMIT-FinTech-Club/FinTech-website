import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className='w-full bg-ft-background'>
      <h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
        How we made it?
      </h1>
      <div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
      <div className="flex flex-col md:flex-row justify-around p-6 md:p-12 space-y-6 md:space-y-0">
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
          <div className="text-6xl mb-4">💻</div>
          <h3 className="text-2xl mb-2">Software Services</h3>
          <p className="text-lg text-gray-600 mb-4">Quisque neque mus si dapibus egestas platea sagittis fames nunc.</p>
          <a href="#" className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800">Learn more</a>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full md:w-1/3 transform scale-110 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-115 z-10">
          <div className="text-6xl mb-4">☁️</div>
          <h3 className="text-2xl mb-2">Cloud Services</h3>
          <p className="text-lg text-gray-600 mb-4">Quisque neque mus si dapibus egestas platea sagittis fames nunc.</p>
          <a href="#" className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800">Learn more</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
          <div className="text-6xl mb-4">🔒</div>
          <h3 className="text-2xl mb-2">Security Services</h3>
          <p className="text-lg text-gray-600 mb-4">Quisque neque mus si dapibus egestas platea sagittis fames nunc.</p>
          <a href="#" className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;