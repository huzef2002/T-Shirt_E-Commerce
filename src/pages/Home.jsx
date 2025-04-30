import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import CardesSection from '../component/CardesSection';
import MidSlider from '../component/MidSlider';
import Colaps from '../component/Colaps.jsx';
import Footer from '../component/Footer.jsx';
import Order from '../component/Order.jsx';

function Home() {
  return (
    <div>
      <Navbar />
      <hr/>
      <Banner/>
      <CardesSection/>
      <MidSlider/>
      <Colaps/>
      {/* <Order/> */}
      <Footer/>
    </div>
  );
}

export default Home;
