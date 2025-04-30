import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderData = [
    {
        id: 1,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067846/1711704269_1353206.jpg_mv1lom.webp",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746039241/avengers-logo-welcome-the-world-mashems-14_uk7h5s.png"
    },
    {
        id: 2,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067749/1727685114_4088267.jpg_kwcl7u.webp",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746039572/Spiderman-Logo-1996_qpjchg.png"
    },
    {
        id: 3,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994269/1740578138_5873624_ugevvo.jpg",
        logoImg: null
    },
    {
        id: 4,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994311/spider-man-super-suit-t-shirt-india-model-600x800_daxiea.jpg",
        logoImg: null
    },
    {
        id: 5,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994269/1740578138_5873624_ugevvo.jpg",
        logoImg: null
    }
];

function Fandom() {
    return (
        <>
            <div className="text-center my-16">
                <h1 className="text-6xl text-orange-700">Select Fandom</h1>
                <p className="text-white text-sm opacity-60">Explore best Suitable T-Shirt.</p>
            </div>

            <div className="relative h-screen bg-black flex flex-col">
                {/* Background Half Screen */}
                <div
                    className="w-full"
                    style={{
                        backgroundImage: "url('https://res.cloudinary.com/dzmwclzmr/image/upload/v1746040819/superhero-background-yu6y6uvhq8bbp4so_j3howi.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        height: "50vh"
                    }}
                ></div>

                {/* Slider */}
                <div className="absolute bottom-4 w-full mx-16">
                    <Swiper
                        loop={true}
                        slidesPerView={4}
                        centeredSlides={true}
                        spaceBetween={20}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {sliderData.map((slide) => (
                            <SwiperSlide key={slide.id} className="flex flex-col items-center">
                                <img
                                    src={slide.tShirtImg}
                                    alt="T-shirt"
                                    className="h-[300px] w-64 object-cover"
                                />
                                {slide.logoImg && (
                                    <img
                                        src={slide.logoImg}
                                        alt="Logo"
                                        className="mt-2 w-60 h-32 object-contain"
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Fandom;
