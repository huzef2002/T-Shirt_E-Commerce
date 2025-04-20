import React from 'react';
import Card from './Card';

function CardesSection() {
    return (
        <>
        <div className='text-center my-20'>
         <h1 className='text-5xl text-orange-700 '>Our Popular Collections</h1>
         <p className='text-white text-sm opacity-60'>Adipiscing elit duis tristique sollicitudin.</p>
         </div>
            <div className=" flex flex-wrap items-center justify-center">
                <Card />
            </div>

        </>
    );
}

export default CardesSection;
