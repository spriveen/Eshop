import React from 'react';
import { IoMdAddCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import Button from '../Shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div
      className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center'
      onClick={() => setOrderPopup(false)} // Close when clicking outside
    >
      <div
        className='w-[300px] p-4 shadow-md bg-black dark:text-white duration-200 rounded-xl'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className='flex items-center justify-between'>
          <h1>Order Now</h1>
          <IoMdCloseCircleOutline
            onClick={() => setOrderPopup(false)}
            className='text-2xl cursor-pointer'
          />
        </div>

        {/* Form Section */}
        <div className='mt-4'>
          <input type='text' placeholder='Name' className='form-input' />
          <input type='email' placeholder='Email' className='form-input' />
          <input type='text' placeholder='Address' className='form-input' />

          <div className='flex justify-center'>
            <Button text="Order Now" bgColor="bg-red-700" textColor="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
