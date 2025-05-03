import React, { useMemo } from 'react';
import { LiaStarSolid } from "react-icons/lia";

function CollectionCard({ sortOption, filters }) {
  // ✅ Your real product data here
  const cardItem = useMemo(() => ([
    {
      id: 1,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Iron Man Arc Reactor Tee",
      price: 499,
      disc: "Glow with power like Tony Stark in this lightweight Arc Reactor T-shirt.",
      type: "Starter Kits",
      category: "Iron Man",
      rating: 4,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994286/1665832629_5408793_zitrxn.jpg",
      name: "Spiderman Web Slinger Tee",
      price: 899,
      disc: "Swing into style with this comfy, web-inspired Spidey shirt.",
      type: "Refills",
      category: "Spiderman",
      rating: 5,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994319/GUEST_d6d30dba-744a-48c7-a405-04513645bf55_yk1xdf.webp",
      name: "Miles Morales Electric Tee",
      price: 299,
      disc: "Charge up your look with Miles' signature electric style.",
      type: "Extras",
      category: "Spiderman",
      rating: 3,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994333/68e6c671-3a07-4b_700464_A_awa617.jpg",
      name: "Captain America Shield Tee",
      price: 699,
      disc: "Defend your style with this bold tee featuring Cap’s iconic shield.",
      type: "Starter Kits",
      category: "Captain America",
      rating: 5,
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994339/71kZpBezQaL._AC_SR462_693__cbutcj.jpg",
      name: "Marvel Heroes Assemble Tee",
      price: 199,
      disc: "Join Earth's mightiest heroes with this epic Avengers design.",
      type: "Refills",
      category: "Marvel",
      rating: 4,
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994275/-473Wx593H-466878285-beige-MODEL_uyhoqb.jpg",
      name: "Iron Man Nano Suit Tee",
      price: 999,
      disc: "Suit up in Tony's nano tech style — sleek and unstoppable.",
      type: "Extras",
      category: "Iron Man",
      rating: 5,
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994240/men-s-black-batman-graphic-printed-t-shirt-283889-1737697420-1_egef7i.jpg",
      name: "Dark Knight Gotham Tee",
      price: 999,
      disc: "Rule the night with Batman’s dark and fearless look.",
      type: "Extras",
      category: "Badman",
      rating: 5,
    },
    {
      id: 9,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994315/GUEST_6cb65735-aa16-404c-8c3d-25d6f67d9913_nrslyb.webp",
      name: "Spiderman Stealth Mode Tee",
      price: 999,
      disc: "Stealthy, stylish, and ready for action — just like Spidey.",
      type: "Extras",
      category: "Spiderman",
      rating: 5,
    },
    {
      id: 10,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994309/Sb9420feb57d84c02afc972f289db965eu_ykftz0.jpg",
      name: "Captain America Vintage Tee",
      price: 999,
      disc: "Classic Cap design for true patriots and superhero fans.",
      type: "Extras",
      category: "Captain America",
      rating: 5,
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994279/61RqRLHSIhL._AC_UY1000__iyaxtz.jpg",
      name: "Spiderman Venom Strike Tee",
      price: 999,
      disc: "Dark Spidey vibes with this bold Venom-inspired print.",
      type: "Extras",
      category: "Spiderman",
      rating: 5,
    },
    {
      id: 12,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994255/61VKzaQhM7L._AC_UY1100__wipww5.jpg",
      name: "Batman Arkham Knight Tee",
      price: 999,
      disc: "Channel Arkham’s hero with this powerful Batman tee.",
      type: "Extras",
      category: "Badman",
      rating: 5,
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745168789/marvel-miles-morales-urban-hoodie-model-600x800_jx6vqs.jpg",
      name: "Miles Morales Urban Hero Tee",
      price: 999,
      disc: "Street style meets hero power with this Miles Morales tee.",
      type: "Extras",
      category: "Spiderman",
      rating: 5,
    },
  ]), []);


  // Apply filters
  let filteredItems = cardItem.filter(item => {
    const matchType = filters.type.length ? filters.type.includes(item.type) : true;
    const matchCat = filters.category.length ? filters.category.includes(item.category) : true;
    return matchType && matchCat;
  });

  // Apply sorting
  if (sortOption === "lowToHigh") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredItems.sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratingHighToLow") {
    filteredItems.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "ratingLowToHigh") {
    filteredItems.sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4  ">
      {filteredItems.map((items) => (
        <div key={items.id} className="shadow rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition  text-white">

          <img src={items.img} alt={items.name} className="w-full h-40 object-cover" />

          <div className="p-3 flex flex-col flex-grow bg-white/10">

            {/* Product Name */}
            <h6 className="font-semibold text-sm mb-1">{items.name}</h6>

            {/* Product Description */}
            <p className="text-gray-500 text-xs mb-2">{items.disc}</p>

            {/* Rating */}
            <div className="text-yellow-500 text-sm mb-1 flex">
              {Array.from({ length: items.rating }).map((_, i) => <LiaStarSolid />)}
            </div>

            {/* Price & Buy */}
            <div className="mt-auto flex justify-between items-center">
              <span className="text-green-600 font-bold text-sm">{items.price}₹</span>
              <button className="border-orange-700 border text-orange-700 text-xs font-bold px-4 py-2 leading-none items-center hover:bg-orange-700 hover:text-white">Buy</button>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}

export default CollectionCard;
