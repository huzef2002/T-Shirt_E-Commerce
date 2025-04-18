import React from 'react';

function Card() {

    const cardItem = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        }
        ,
        {
            id: 2,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        }
        ,
        {
            id: 3,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        }
        ,
        {
            id: 4,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        },
        {
            id: 7,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        },
        {
            id: 8,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        }
    ]
    return (
            <div className="flex flex-wrap justify-center">
                {cardItem.map((items, ind) => {
                    return (
                        <div key={ind} className="flex-shrink-0 m-6 relative overflow-hidden bg-white/10 max-h-100 max-w-62 shadow-lg">
                            <div className="relative flex items-center justify-center">
                                <img className="relative h-80 w-full" src={items.img} alt="product" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">{items.name}</span>
                                    <span className="block border-orange-700  border text-white text-xs font-bold px-4 py-2 leading-none flex items-center">
                                        {items.price}
                                    </span>
                                </div>
                                <span className="block text-xs opacity-75 -mb-1">{items.disc}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
}

export default Card;
