import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import CardesSection from '../component/CardesSection';
import Product from '../component/product';

function Home() {
  return (
    <div>
      <Navbar />
      <hr/>
      <Banner/>
      <CardesSection/>
      {/* <Product/> */}
    </div>
  );
}

export default Home;
