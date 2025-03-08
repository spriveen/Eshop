import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';

// Ensure the correct path for image imports
import headphone from './assets/hero/headphone.png';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';

// Banner data objects
const BannerData = {
  discount: '30% off',
  title: 'Fine Smile',
  date: '10 Jan to 24 Jan',
  image: headphone,
  details: {
    title2: 'Air Solo Bass',
    title3: 'Winter Sale',
    title4: 'Exclusive deals available now!',
  },
  bgColor: 'bg-red-500'
};

const BannerData2 = {
  discount: '30% off',
  title: 'Happy Hours',
  date: '14 Jan to 24 Jan',
  image: smartwatch2,
title2: 'Smart Solo Bass',
    title3: 'Winter Sale',
    title4: 'Exclusive deals available now!',
   bgColor: 'bg-green-500'
};

// Main App Component
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
    </div>
  );
};

export default App;
