'use client'

import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

const FormBox = () => {
  const [sell, setSell] = useState('');
  const [buy, setBuy] = useState('');

  return (
    <div className="p-4 py-6 flex flex-col justify-center items-center min-h-[calc(100svh-80px)] text-[#9B9B9B]">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight text-white">
        Swap anytime, <br /> anywhere.
      </h1>

      {/* Form Box */}
      <div className="mt-10 w-full max-w-[480px] bg-[#131313] p-4 lg:p-6 rounded-3xl shadow-lg">
        {/* Sell Section */}
        <div className="p-4 py-6 border border-[rgba(255,255,255,0.12)] rounded-[20px] relative">
          <p className="text-sm font-medium  mb-2">Sell</p>
          <div className="flex items-center">
  <input
    type="text"
    value={sell}
    onChange={(e) => setSell(e.target.value)}
    placeholder="0"
    className="bg-transparent text-3xl focus:outline-none text-[#9B9B9B] flex-1 min-w-0"
  />
  <span className="flex-shrink-0 flex items-center gap-2 bg-[#131313] hover:bg-transparent transition-all duration-300 border border-[rgba(255, 255, 255, 0.12)] p-1 pr-2.5 rounded-[20px]">
    <Image
      quality={100}
      className="w-7 h-7 object-cover"
      width={28}
      height={28}
      src="/eth.png"
      alt="ethereum icon"
    />
    <p className='text-white font-bold'>ETH</p>
    <IoIosArrowDown className='text-base' />
  </span>
</div>
  <p className='mt-2'>${100 * Number(sell || 0)}</p>


           {/* Spacer */}
        <button className="flex justify-center shadow-md absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#131313] p-1 rounded-2xl border border-[rgb(19,19,19)]">
          <div className="bg-[rgb(27,27,27)] p-2.5  rounded-md text-white ">
          <FaArrowDown />
          </div>
        </button>
        </div>

        {/* Buy Section */}
        <div className="p-4 border border-[rgba(255,255,255,0.12)] rounded-[20px] bg-[#2C2C2C] mt-1">
          <p className="text-sm font-medium mb-2">Buy</p>
          <div className="flex items-center">
            <input
              type="text"
              value={buy}
              onChange={(e) => setBuy(e.target.value)}
              placeholder="0"
              className="bg-transparent text-3xl focus:outline-none text-[#9B9B9B] flex-1 min-w-0"
            />
            <span className="flex-shrink-0 flex items-center gap-2 bg-[#FC72FF] transition-all duration-300 h-10 px-3 rounded-[20px] text-white">
    <p className='text-white font-bold'>Select token</p>
    <IoIosArrowDown className='text-base' />
  </span>
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full mt-6 bg-[rgb(49,28,49)] text-[#FC72FF] font-semibold py-3 rounded-2xl hover:opacity-90 transition-opacity"
        >
          
         Get started
        </button>
      </div>
    </div>
  );
};

export default FormBox;
