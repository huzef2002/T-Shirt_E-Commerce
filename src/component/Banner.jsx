import React from 'react'
import { useNavigate } from 'react-router-dom';


function Banner() {

    const navigate = useNavigate() ;

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
                    <p className="uppercase tracking-widest text-sm mb-2 opacity-60">
                        STYLE · POWER · COMFORT
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-2">
                        Unleash the Hero in You
                    </h1>
                    <h2 className="text-orange-700 text-4xl mb-4">Suit Up. Stand Out.</h2>
                    <p className="text-sm md:text-base opacity-60 mb-6 leading-relaxed">
                        Discover a bold collection of premium superhero tees that blend iconic style with all-day comfort. Whether you're team Marvel, DC,
                        or a pop culture rebel — wear your fandom loud and proud.

                    </p>

                    <div className="flex gap-4">
                        <button className="bg-orange-700 hover:bg-orange-700 px-8 py-2 text-white text-sm  uppercase">
                            Shop Now
                        </button>
                        <button onClick={()=>{navigate("/collection")}} className="border border-orange-700 hover:bg-orange-700 hover:text-white text-sm px-8 py-2 text-white uppercase">
                            EXPLORE COLLECTION

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
