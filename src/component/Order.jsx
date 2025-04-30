import React from 'react';

const items = [
  {
    id: 1,
    name: "Basic Tee 6-Pack",
    size: "XXS",
    color: "White",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
  },
  {
    id: 2,
    name: "Basic Tee 6-Pack",
    size: "XXS",
    color: "White",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
  },
  {
    id: 3,
    name: "Basic Tee 6-Pack",
    size: "XXS",
    color: "White",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
  },
];

function Order() {
  return (
    <div className="z-50 relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8" >

      {/* Close Button */}
      <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
        <span className="sr-only">Close cart</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Items List */}
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="size-16 rounded-sm object-cover" />

              <div>
                <h3 className="text-sm text-gray-900">{item.name}</h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline"> {item.size} </dd>
                  </div>
                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline"> {item.color} </dd>
                  </div>
                </dl>
              </div>

              {/* Qty + Remove */}
              <div className="flex flex-1 items-center justify-end gap-2">
                <form>
                  <label htmlFor={`Line${item.id}Qty`} className="sr-only"> Quantity </label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    id={`Line${item.id}Qty`}
                    className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600
                    [-moz-appearance:_textfield] focus:outline-hidden 
                    [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>

                <button className="text-gray-600 transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21..." />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer Links */}
        <div className="space-y-4 text-center">
          <a href="#" className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
            View my cart ({items.length})
          </a>

          <a href="#" className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
            Checkout
          </a>

          <a href="#" className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Order;
