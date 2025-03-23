import React from 'react';
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png"; // Fixed extra dot issue
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
   {
      id: 1,
      img: Image1,
      subtitle: "Best Solo",
      title: "Wireless",
      title2: "Headphone", // Fixed missing comma
      description: "Experience the ultimate sound with our wireless headphones. Enjoy crystal-clear audio and a comfortable fit. Perfect for music lovers and gamers alike."
   },
   {
      id: 2,
      img: Image2,
      subtitle: "Best Solo",
      title: "Wireless",
      title2: "Virtual", // Fixed missing comma
      description: "Experience the best virtual reality with our top-tier VR headsets. Immerse yourself in gaming, movies, and more like never before."
   },
   {
      id: 3,
      img: Image3,
      subtitle: "Best Solo",
      title: "Wireless",
      title2: "MacBook", // Fixed missing comma
      description: "Powerful performance meets sleek design. The latest MacBook redefines productivity and portability for professionals and creatives."
   },
];

const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px]
            sm:min-h-[650px] hero-bg-color flex justify-center
            items-center '>
                <div className=' container pb-8 sm:pb-0'>
                {/* Hero Section */}
            <Slider {...settings}>
              {
                HeroData.map((data)=>(
                    <div key={data.id}>
                        <div className='gridgrid-cols-1 sm:grid-cols-2'>
                     {/*text content section  */}
                     <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12
                     sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative  z-10'>
                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                            {data.subtitle}</h1>
                        <h1 className='text-5xl sm:text-6xl
                        lg:text-7xl font-bold'>
                            {data.title}</h1>
                        <h1 className='text-5xl uppercase text-white
                        dark:text-white/5 sm:text-[80px] md:text-[100px]
                        xl:text-[150px] font-bold'>{data.title2}</h1>
                        <div >
                          <Button text="Shop By Category" bgColor="bg-red-400" textColor="text-white"
                           handler={handleOrderPopup}
                          /> 
                        </div>
                     </div>
                    {/*Img content section  */}
                    <div className='order-1 sm:order-2'>
                        <div>
                           <img src={data.img} alt="" 
                            className='w-[300px]  sm:w-[450px] h-[300px] sm:h-[450px]  sm:scale-105 lg:scale-110
                            object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]
                            relative z-40'
                           />
                        </div>
                    </div>
                        </div>
                     </div>
                ))
              }  
                    
               
            </Slider>
            </div>
        </div>
        </div>
    );
};

export default Hero;
