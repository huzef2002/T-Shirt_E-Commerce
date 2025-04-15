import React from 'react';

function Card() {
    return (


        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white/10 rounded-lg max-h-100 max-w-72 shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
                <img className="relative h-80 w-52" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">

                <div className="flex justify-between">
                    <span className="block font-semibold text-xl">Name</span>
                    <span className="block bg-orange-700 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">
                        $36.00
                    </span>
                </div>
                <span className="block text-xs opacity-75 -mb-1">this is for summer seson try it feel owsom </span>
            </div>
        </div>

    );
}

export default Card;
