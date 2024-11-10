"use client"
import { CakeIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to update cart count based on localStorage
    const updateCartCount = () => {
      const existingCart = localStorage.getItem('cart');
      const cartItems = existingCart ? JSON.parse(existingCart) : [];
      setCartCount(cartItems.length);
    };

    // Initialize cart count on component mount
    updateCartCount();

    // Listen for custom 'cartUpdated' event
    window.addEventListener('cartUpdated', updateCartCount);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full p-3 border-b-2 border-[#F5F3FF] bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-nowrap gap-2 sm:gap-4 md:gap-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src='/logo.jpg'
            alt='logo'
            width={70}
            height={70}
            className='rounded-full border-myRed border-solid border-2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]'
          />
          <h1 className="ml-2 text-lg font-bold text-red-900 sm:text-xl md:text-2xl lg:text-3xl">
            DoniaSweets
          </h1>
        </div>

        {/* Icon Section */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 relative">
          <Link href="/">
            <CakeIcon
              className="text-[#772424] cursor-pointer hover:scale-110 transition-transform duration-300 w-7 h-7 sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            />
          </Link>

          {/* Cart Icon with Badge */}
          <Link href="/cart" className="relative">
            <FaShoppingCart
              className="text-[#772424] cursor-pointer hover:scale-110 transition-transform duration-300 w-6 h-6 sm:w-[28px] sm:h-[28px] md:w-[35px] md:h-[35px]"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
