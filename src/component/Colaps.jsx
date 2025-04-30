import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Colaps = () => {
    return (
        <div className="px-5 mx-16">

            <div className='text-center my-10'>
                <h1 className='text-5xl text-orange-700 '>Summer Collections</h1>
                <p className='text-white text-sm opacity-60'>Explore best Suitable T-Shirt.</p>
            </div>
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={50}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000, // 2 seconds delay
                    disableOnInteraction: false, // autoplay will not stop after user swipe
                }}
                modules={[Pagination, Autoplay]}  // ✅ Added Autoplay module
            >

                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067846/1711704269_1353206.jpg_mv1lom.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067749/1727685114_4088267.jpg_kwcl7u.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994269/1740578138_5873624_ugevvo.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994311/spider-man-super-suit-t-shirt-india-model-600x800_daxiea.jpg' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994269/1740578138_5873624_ugevvo.jpg' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Colaps;
