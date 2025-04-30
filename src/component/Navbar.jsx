import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [nav, setNav] = useState(false);

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    const handleProfileNavigation = (tabName) => {
        navigate(`/profile?tab=${tabName}`);
        setIsProfileVisible(false); // close the dropdown after navigating
    };

    return (
        <div className='bg-black/80 flex justify-between items-center h-15 w-full mx-auto px-4 text-white z-50 fixed'>
            <h1 className=' text-5xl text-white ms-16'>Luci<span className="text-orange-700 text-5xl">F</span>er.</h1>

            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li key={item.id} className='p-2 text-sm m-2 cursor-pointer duration-300 hover:text-orange-700'>
                        {item.text}
                    </li>
                ))}
            </ul>

            <div className='flex gap-8 mr-3'>
                <FaShoppingCart className='cursor-pointer duration-300 hover:text-orange-700' size={18} />

                <div
                    onMouseEnter={() => setIsProfileVisible(true)}
                    onMouseLeave={() => setIsProfileVisible(false)}
                    className="relative"
                >
                    <FaUser className='cursor-pointer duration-300 hover:text-orange-700' size={18} />

                    {isProfileVisible && (
                        <div className="absolute bg-black text-white shadow-lg p-4 z-50 top-full right-0 w-48">
                            <button
                                onClick={() => setIsProfileVisible(false)}
                                className="absolute top-2 right-2 text-white text-xl"
                            >
                                <AiOutlineClose />
                            </button>

                            {firebase.isLoggedIn ? (
                                <>
                                    <h2 className="text-orange-700 text-xl font-bold mt-4">Hi, John Doe</h2>
                                    <ul className="space-y-4 mt-4">
                                        <li
                                            className="cursor-pointer hover:text-orange-700"
                                            onClick={() => handleProfileNavigation("My Profile")}
                                        >
                                            My Profile
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-orange-700"
                                            onClick={() => handleProfileNavigation("Wishlist")}
                                        >
                                            Wishlist
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-orange-700"
                                            onClick={() => handleProfileNavigation("Orders")}
                                        >
                                            Orders
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-orange-700"
                                            onClick={() => handleProfileNavigation("Wallet")}
                                        >
                                            Wallet
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-orange-700 text-xl font-bold mt-4">Welcome!</h2>
                                    <ul className="space-y-4 mt-4">
                                        <li className="cursor-pointer hover:text-orange-700" onClick={() => navigate('/signin')}>
                                            Log In
                                        </li>
                                        <li className="cursor-pointer hover:text-orange-700" onClick={() => navigate('/signup')}>
                                            Register
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul className={
                nav
                    ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
            }>
                <h1 className='w-full text-3xl font-bold text-white m-4'>SU<span className='hover:bg-orange-700'>P</span>ER.</h1>
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
