import React from 'react';

function Product() {
    return (
      
            <section className="w-full bg-black text-white py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Level up your journey with <br />
                            <span className="text-orange-700 font-bold">Zidio Skaters</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            Explore premium skating products designed for speed, style, and ultimate performance. Join the ride today.
                        </p>

                        <div className="bg-[#1e1e1e] p-6 rounded-lg ">
                            <h3 className="font-semibold text-lg mb-2">
                                Premium Boards, Bold Riders – Only at Zidio
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Discover next-level skateboards built for thrill seekers. Our high-performance boards ensure smooth rides,
                                bold tricks, and standout street style. Whether you're a beginner or pro, Zidio has the perfect board for you.
                            </p>
                            <div className="right-[-20px] top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dzmwclzmr/image/upload/v1744097814/cld-sample-3.jpg" alt="Skaters" className="rounded-lg w-full" />
                        <button className="top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                            Shop now
                        </button>
                    </div>
                </div>
            </section>
  
    );
}

export default Product;
