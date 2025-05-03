import React, { useMemo } from 'react';
import { LiaStarSolid } from "react-icons/lia";

function CollectionCard({ sortOption, filters }) {
  // ✅ Your real product data here
  const cardItem = useMemo(() => ([
    {
      id: 1,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Summer T-Shirt",
      price: 499,
      disc: "Perfect for hot summer days. Comfortable and stylish.",
      type: "Starter Kits",
      category: "Iron Man",
      rating: 4,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994286/1665832629_5408793_zitrxn.jpg",
      name: "Refill Pack - 5L",
      price: 899,
      disc: "Save money and reduce waste with this refill pack.",
      type: "Refills",
      category: "Spider man",
      rating: 5,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994319/GUEST_d6d30dba-744a-48c7-a405-04513645bf55_yk1xdf.webp",
      name: "Laundry Detergent",
      price: 299,
      disc: "Removes stains and keeps your clothes fresh.",
      type: "Extras",
      category: "Spider Man",
      rating: 3,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994333/68e6c671-3a07-4b_700464_A_awa617.jpg",
      name: "Dish Cleaning Set",
      price: 699,
      disc: "Complete set for all your dish cleaning needs.",
      type: "Starter Kits",
      category: "Captain America",
      rating: 5,
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994339/71kZpBezQaL._AC_SR462_693__cbutcj.jpg",
      name: "Toilet Cleaner",
      price: 199,
      disc: "Powerful formula for a sparkling clean toilet.",
      type: "Refills",
      category: "Marvel",
      rating: 4,
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994275/-473Wx593H-466878285-beige-MODEL_uyhoqb.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Iron Man",
      rating: 5,
    },
    
    {
      id: 7,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994240/men-s-black-batman-graphic-printed-t-shirt-283889-1737697420-1_egef7i.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Badman",
      rating: 5,
    },
    
    {
      id: 9,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994315/GUEST_6cb65735-aa16-404c-8c3d-25d6f67d9913_nrslyb.webp",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Spiderman",
      rating: 5,
    },

    {
      id: 10,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994309/Sb9420feb57d84c02afc972f289db965eu_ykftz0.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Captain America",
      rating: 5,
    },

    {
      id: 11,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994279/61RqRLHSIhL._AC_UY1000__iyaxtz.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Spider Man",
      rating: 5,
    },

    {
      id: 12,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745994255/61VKzaQhM7L._AC_UY1100__wipww5.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Badman",
      rating: 5,
    },

    {
      id: 8,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1745168789/marvel-miles-morales-urban-hoodie-model-600x800_jx6vqs.jpg",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Spider Man",
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
              {Array.from({ length: items.rating }).map((_, i) => <LiaStarSolid/>)}
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
