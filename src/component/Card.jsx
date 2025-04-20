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
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745053826/dc-batman-emblem-hoodie-model-front-600x800_yk9isr.jpg",
            name: "Badman",
            price: "800₹",
            disc: "this is for summer seson try it feel owsom"
        }
        ,
        {
            id: 3,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067749/1727685114_4088267.jpg_kwcl7u.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        }
        ,
        {
            id: 4,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745067846/1711704269_1353206.jpg_mv1lom.webp",
            name: "spader",
            price: "600₹",
            disc: "this is for summer seson try it feel owsom"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745068017/DC_20Comics_20Batman_20Who_20Laughs_20Supervillain_20Black_20Tee_zuzay2.jpg",
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
                        <div key={ind} className="flex-shrink-0 m-6 overflow-hidden bg-white/10 h-100 max-w-62 shadow-lg">
                            <div className="flex items-center justify-center hover:scale-[1.1] transition-all cursor-grab duration-500 ease-in-out">
                                <img className=" h-80 w-64" src={items.img} alt="product" />
                            </div>
                            <div className="text-white px-6 pb-6 mt-6">
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
