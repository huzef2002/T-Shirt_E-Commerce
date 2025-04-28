import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Colaps = () => {
    return (
        <div className="px-5 mx-16">

            <div className='text-center my-10'>
                <h1 className='text-5xl text-orange-700 '>Summer Collections</h1>
                <p className='text-white text-sm opacity-60'>Explore best Suitable T-Shirt.</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide><img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067846/1711704269_1353206.jpg_mv1lom.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067749/1727685114_4088267.jpg_kwcl7u.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745053826/dc-batman-emblem-hoodie-model-front-600x800_yk9isr.jpg' /></SwiperSlide>
                <SwiperSlide><img src='https://res.cloudinary.com/dzmwclzmr/image/upload/v1745053826/dc-batman-emblem-hoodie-model-front-600x800_yk9isr.jpg' /></SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Colaps;
