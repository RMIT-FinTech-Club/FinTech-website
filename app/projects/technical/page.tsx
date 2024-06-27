import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

const Home = () => {
  return (
    <div className='bg-ft-background'>
      <Header />
      <ProjectList />
    </div>
  );
};

export default Home;
