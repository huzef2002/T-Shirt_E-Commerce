import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import CardesSection from '../component/CardesSection';
import MidSlider from '../component/MidSlider';
import Colaps from '../component/Colaps.jsx';
import Footer from '../component/Footer.jsx';
import Fandom from '../component/Fandom.jsx';

function Home() {
  return (
    <div>
      
      <hr/>
      <Banner/>
      <CardesSection/>
      <MidSlider/>
      <Colaps/>
      <Fandom/>
      <Footer/>
    </div>
  );
}

export default Home;
