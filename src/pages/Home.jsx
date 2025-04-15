import React from 'react';
import Navbar from '../component/Navbar';
import Card from '../component/Card';

function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="p-1 flex flex-wrap items-center justify-center h-screen">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Home;
