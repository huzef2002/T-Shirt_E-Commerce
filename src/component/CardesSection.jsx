import React from 'react';
import Card from './Card';

function CardesSection() {
    return (
        <>
        <div className='text-center justify-center '>
         <h1 className='text-5xl text-orange-700 '>Our Popular Collections</h1>
         <p className='text-white text-sm opacity-60'>Adipiscing elit duis tristique sollicitudin.</p>
         </div>
        
            <div className="p-1 flex flex-wrap items-center justify-center h-screen">
                <Card />
            </div>

        </>
    );
}

export default CardesSection;
