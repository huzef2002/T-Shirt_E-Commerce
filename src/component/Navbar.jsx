import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
    ];

    return (
        <div className='bg-black/60 flex justify-between items-center h-15 w-full mx-auto px-4 text-white z-50 fixed'>
            {/* Logo */}
            <h1 className=' text-3xl font-bold text-white'>SU<span className="text-orange-700 text-5xl">P</span>ER.</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li key={item.id}
                        className='p-2 text-sm m-2 cursor-pointer duration-300 hover:text-[#00df9a]'>
                        {item.text}
                    </li>
                ))}
            </ul>

            <div className='flex gap-8 mr-3'>
            <FaShoppingCart size={18} />
            <FaUser size={18} />
            </div>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul className={ nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'}>

                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-white m-4'>SU<span className='hover:bg-orange-700'>P</span>ER.</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li key={item.id} className='z-50 p-4 border-b rounded-xl hover:bg-orange-700 duration-300 hover:text-black cursor-pointer border-gray-600'>
                        {item.text}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Navbar;