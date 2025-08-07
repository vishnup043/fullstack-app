// components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md relative z-50 2xl:py-12 xl:py-6 py-4 sticky top-0">
      <div className='container'>
        <div className="flex justify-between h-16 items-center">
          <div
            href="/"
            className="lg:w-[260px] w-[150px]"
          >
            <Image
              width={260}
              height={45}
              alt="logo"
              className='w-full'
              src="/logo/logo.png"
            />
          </div>
          {/* Desktop Menu */}
          <div className='grid grid-flow-col gap-4 items-center'>
            <Link href="/" className="md:block hidden text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">order online</Link>
            <Link href="/about" className="md:block hidden text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">Create Account</Link>
            <Link href="/contact" className="text-greyblack md:block hidden"><p>About Us</p></Link>
            <div className='h-[30px] w-[30px]'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-darkgreen2 focus:outline-none p-1 text-white rounded-[50%]"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-full h-full'
                  }`}
                  fill="#fff"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <button className='relative px-5 text-2xl font-bold'>
              <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                100
              </span>
              <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out shadow-lg ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-8 space-y-4">
            <button
              className="text-gray-600 hover:text-red-500 float-right"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            <nav className="grid grid-flow-row  gap-4 text-lg text-greyblack">
              <Link href="/" className="block"><p>About</p></Link>
              <Link href="/about" className="block"><p>Culinary Maitake</p></Link>
              <Link href="/contact" className="block"><p>Maitake Suppliments</p></Link>
              <Link href="/contact" className="block"><p>Our Affiliations</p></Link>
              <Link href="/contact" className="block"><p>News & Publications</p></Link>
              <Link href="/contact" className="block"><p>Allergen Information</p></Link>
              <Link href="/contact" className="block"><p>Contact Us</p></Link>
                          <Link href="/" className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl md:hidden block">order online</Link>
            <Link href="/about" className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl md:hidden block">Create Account</Link>

            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
