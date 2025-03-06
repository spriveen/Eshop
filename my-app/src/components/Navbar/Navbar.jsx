import React from 'react';
import { IoMdSearch } from "react-icons/io";
import {FaCaretDown, FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Blogs", link: "/blog" }
];

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between
        items-center'>

          {/* Logo and links Items */}
          <div className='flex items-center gap-6'>
            <a href='#' className='text-red-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              Eshop
            </a>
            {/* Menu Items */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-6'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Drop down */}
                <li className='relative cursor-pointer group'>
               <a href='#' className=''>
                   Quick Link
               </a>
               <span>
                <FaCaretDown className='group-hover:rotate-180 duration-300' />
               </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right Section */}
          <div className='flex justify-between items-center
          gap-4'>

            {/* Search Bar */}
            <div className="relative group hidden sm:block">
            <input
           type="text"
           placeholder="Search"
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800
           dark:border-gray-600 dark:text-white"
            />
           <IoMdSearch
           className="text-xl text-gray-600 group-hover:text-red-400 dark:text-gray-400 
            absolute top-1/2 right-3 transform -translate-y-1/2 duration-200"
          />
          </div>

            {/* Order button Section */}
            <button className="relative p-1">
           <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            <div
        className="w-4 h-4 bg-red-600 text-white rounded-full absolute top-0 right-0 flex items-center 
        justify-center text-xs translate-x-1/2 -translate-y-1/2"
          >4
      </div>
       </button>

            {/* Dark Mode Section (Placeholder) */}
            <div>
            <DarkMode/>
            </div>
             </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
