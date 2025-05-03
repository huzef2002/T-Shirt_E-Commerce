import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sliderData = [
    {
        id: 1,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067846/1711704269_1353206.jpg_mv1lom.webp",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746039572/Spiderman-Logo-1996_qpjchg.png"
    },
    {
        id: 2,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067749/1727685114_4088267.jpg_kwcl7u.webp",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746039241/avengers-logo-welcome-the-world-mashems-14_uk7h5s.png"
    },
    {
        id: 3,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994333/68e6c671-3a07-4b_700464_A_awa617.jpg",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746303039/402670-removebg-preview_etktrs.png"
    },
    {
        id: 4,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994255/61VKzaQhM7L._AC_UY1100__wipww5.jpg",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746302619/png-transparent-batman-arkham-city-lockdown-batman-arkham-asylum-batman-arkham-origins-batman-return-to-arkham-batman-arkham-city-emblem-mammal-logo-removebg-preview_mh0e0v.png"
    },
    {
        id: 5,
        tShirtImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994339/71kZpBezQaL._AC_SR462_693__cbutcj.jpg",
        logoImg: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1746301912/e42b72121ac11b1997e99977b21daf2a-removebg-preview_jgz1fe.png"
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
                <div className="absolute bottom-4 w-full px-4 sm:px-8">
                    <Swiper
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={20}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {sliderData.map((slide) => (
                            <SwiperSlide key={slide.id} className="flex flex-col items-center group">
                                <img
                                    src={slide.tShirtImg}
                                    alt={`T-shirt design ${slide.id}`}
                                    className="h-[300px] w-64  rounded-xl shadow-lg"
                                />
                                {slide.logoImg && (
                                    <img
                                        src={slide.logoImg}
                                        alt={`Logo for design ${slide.id}`}
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
