import React, { useMemo } from 'react';

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
      category: "Hand Soap",
      rating: 4,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Refill Pack - 5L",
      price: 899,
      disc: "Save money and reduce waste with this refill pack.",
      type: "Refills",
      category: "Cleaning Sprays",
      rating: 5,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Laundry Detergent",
      price: 299,
      disc: "Removes stains and keeps your clothes fresh.",
      type: "Extras",
      category: "Laundry",
      rating: 3,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Dish Cleaning Set",
      price: 699,
      disc: "Complete set for all your dish cleaning needs.",
      type: "Starter Kits",
      category: "Dish",
      rating: 5,
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Toilet Cleaner",
      price: 199,
      disc: "Powerful formula for a sparkling clean toilet.",
      type: "Refills",
      category: "Toilet",
      rating: 4,
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dzmwclzmr/image/upload/v1744956014/shopping_yiv9rd.webp",
      name: "Personal Care Kit",
      price: 999,
      disc: "All-in-one care kit for your personal hygiene.",
      type: "Extras",
      category: "Personal Care",
      rating: 5,
    },
    // ✅ Add more items below as per your real products
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
            <div className="text-yellow-500 text-sm mb-1">
              {Array.from({ length: items.rating }).map((_, i) => "⭐")}
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
