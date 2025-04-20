import React from 'react';

function MidSlider() {
    return (
        <div className='px-20 pt-5 '>
            {/* // top section */}
            <div className='block md:flex justify-between  text-white'>
                <div className='mt-16'>
                    <h1 className='w-96 text-4xl md:text-5xl mb-4'>Unleash Your Inner Hero with <span className='text-orange-700'><br/>Super Tees</span>

                    </h1>
                    <p className='w-96 text-sm opacity-60'>Discover bold, high-quality superhero tees that match your energy. Rock your favorite characters in style and comfort.</p>
                </div>
                <div className='flex items-center justify-center mt-5' >
                    <button className="bg-orange-700 px-6 py-2 text-sm hover:text-orange-700 hover:border-orange-700 border hover:bg-black">
                        Shop now
                    </button>
                </div>
            </div>
            {/* Bottom section */}
            <div className="relative w-full px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Left Section (Text) */}
                    <div className=" md:absolute  bg-black text-white p-6 w-full md:w-1/2 shadow-lg h-72 flex items-center justify-center">
                        <div>
                            <h1 className="text-2xl md:text-3xl mb-4">
                                Wear the Legend – Premium Superhero T-Shirts Collection
                            </h1>
                            <p className="text-xs md:text-sm mb-3 opacity-60">
                            Step into the world of your favorite heroes. Whether you're a fan of Marvel, DC, or anime legends — we’ve got tees designed for every fandom and style.
                            </p>
                            <p className="text-xs md:text-sm opacity-60">
                            Crafted with 100% premium cotton and vibrant prints, these tees are built for comfort and style. Express your fandom. Own your power.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:ms-[496px] bg-slate-100 flex items-center justify-center rounded-lg shadow-lg place-content-end">
                        <div className="text-gray-800 text-lg font-medium">
                            <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745059959/group-skate_zdf1tu.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MidSlider;
