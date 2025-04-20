import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import CardesSection from '../component/CardesSection';
import MidSlider from '../component/MidSlider';

function Home() {
  return (
    <div>
      <Navbar />
      <hr/>
      <Banner/>
      <CardesSection/>
      <MidSlider/>
    </div>
  );
}

export default Home;
