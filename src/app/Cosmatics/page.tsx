import Button from '@/components/button';
import React from 'react';
import Image from 'next/image';

function Cosmatics() {
  return (
    <div className='flex flex-col md:flex-row md:ml-12 mt-10 justify-start items-center'>
      <Image
        className='scale-up-center rounded-lg w-full max-w-[500px]'
        src="/cosmetics.webp"
        alt="logo"
        width={500}
        height={500}
      />

      <div className='scale-up-center w-full md:ml-10 mt-5 md:mt-0'>
        <h1 className='font-bold text-3xl md:text-4xl underline mb-2 text-pink-500'>All Cosmetic And Beauty Products:</h1>

        <h3 className='mt-3 mb-2 font-bold text-xl md:text-2xl'>Description:</h3>

        <p className='mt-3 mb-2 text-sm md:text-base'>
          Cosmetic and beauty products encompass a wide range of items designed to enhance appearance, improve skin health, and promote self-care. These products cater to various needs, from makeup that enhances facial features to skincare that maintains healthy, glowing skin. They also include haircare, fragrances, and tools that aid in achieving desired beauty goals.
        </p>

        <h3 className='mt-3 mb-2 font-bold text-lg md:text-xl'>Key Features:</h3>

        <ol className='mt-3 mb-5 list-decimal list-inside'>
          <li>* Face Powder: Sets foundation and concealer, absorbing excess.</li>
          <li>* Anti-Aging Properties: Velvet matte</li>
          <li>* Sun Protection: Up to 8 hours of wear</li>
          <li>* Cleansing and Detoxification: Contains jojoba oil and shea butter</li>
          <li>* Soothing and Calming: Medium-to-full, buildable</li>
          <li>* Acne Control: Luminous, dewy</li>
        </ol>
        
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Cosmatics;
