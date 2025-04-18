import React from 'react';

function Banner() {
    return (
        <div>



            <div
                className="relative h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dzmwclzmr/image/upload/v1744702367/1771563_scoidy.jpg')", // Replace with your actual path
                }}
            >
                {/* Overlay for darker effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text & Buttons */}
                <div className="relative z-10 text-white px-8 md:px-20 max-w-2xl">
                    <p className="uppercase tracking-widest text-sm mb-2 text-gray-300">
                        Fun · Ride · Enjoy
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-2">
                        Life is better when it's on rails
                    </h1>
                    <h2 className="text-orange-600 text-5xl mb-4">Enjoy</h2>
                    <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                        Nunc sed augue lacus viverra vitae. Convallis posuere morbi leo urna
                        molestie at elementum. Arcu non odio euismod. Arcu risus quis varius.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-orange-600 hover:bg-orange-700 px-8 py-2 text-white text-sm  uppercase">
                            Shop Now
                        </button>
                        <button className="border border-orange-600 hover:bg-orange-600 hover:text-white text-sm px-8 py-2 text-white uppercase">
                            Know More
                        </button>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Banner;
