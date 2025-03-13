import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';


 const FooterLinks =[
    {
        title: 'Home',
        link: "/#",
    },

    {
        title: 'About',
        link: "/#about",
    },

    {
        title: 'Contact',
        link: "/#contact",
    },

    {
        title: 'Blog',
        link: "/#blog",
    },
 ];




const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
       <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/*company details  */}
            <div className='py-8 px-4'>
             <a href='#'
              className='text-red-400 font-semibold
              tracking-widest text-2xl uppercase sm:text-3xl'
              >
                E shop
             </a>
             <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
             Welcome to our e-shop! Find the best deals on fresh products.  
             </p>
             <p className='text-gray-600 mt-4'>
                Create by Riveen_Official
             </p>
            </div>
            {/* footer links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                   <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1> 
                   <ul className='space-y-3'>
                    {
                       FooterLinks.map(
                        (data,index) =>(
                          <li key={index}>
                          <a
                          
                          href={data.link}
                          className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black
                          duration-300'
                          >
                             {data.title}
                          </a>
                          </li>  
                        )
                       )   
                    }
                   </ul>
                </div>
                {/* second column */}
                <div className='py-8 px-4'>
                   <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1> 
                   <ul className='space-y-3'>
                    {
                       FooterLinks.map(
                        (data,index) =>(
                          <li key={index}>
                          <a
                          
                          href={data.link}
                          className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black
                          duration-300'
                          >
                             {data.title}
                          </a>
                          </li>  
                        )
                       )   
                    }
                   </ul>
                </div>

                {/* Company Address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                       Address </h1>
                <div>
                    <div className="flex items-center gap-3">
                       <FaLocationArrow /> 
                       <p>MountLavania, Colombo</p>
                       </div>
                       <div className='flex items-center gap-3 mt-6'>
                        <FaMobileAlt />
                        <p>+94 77 123 4567</p>
                       </div>

                       {/* social links */}
                       <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                           <FaInstagram className='text-3xl
                           hover:text-red-400 duration-300' /> 
                        </a>

                        <a href='#'>
                           <FaFacebook className='text-3xl
                           hover:text-blue-700 duration-300' /> 
                        </a>

                        <a href='#'>
                           <FaLinkedin className='text-3xl
                           hover:text-blue-900 duration-300' /> 
                        </a>
                       </div>
                </div>
                </div>
            </div>
              </div>
        </div> 
    </div>
  );
};

export default Footer