import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';

function BeautyProducts() {
  return (
    <div className='flex flex-col md:flex-row md:ml-12 mt-10 justify-start items-center'>
      <Image
        className='scale-up-center rounded-lg w-full max-w-[500px]'
        src="/brushes.jpg"
        alt="logo"
        width={500}
        height={500}
      />

      <div className='scale-up-center w-full md:ml-10 mt-5 md:mt-0'>
        <h1 className='font-bold text-3xl md:text-4xl underline mb-2 text-pink-500'>Beauty Products:</h1>

        <h3 className='mt-3 mb-2 font-bold text-xl md:text-2xl'>Description:</h3>

        <p className='mt-3 mb-2 text-sm md:text-base'>
          Beauty products are cosmetic and skincare items designed to enhance physical appearance, promote personal care, and boost confidence. They range from makeup and haircare to skincare and body care, each with specific functions to improve, highlight, or maintain certain features. Beauty products are widely used by individuals of all ages and skin types, catering to various aesthetic preferences and needs.
        </p>

        <h3 className='mt-3 mb-2 font-bold text-lg md:text-xl'>Key Features:</h3>

        <ol className='mt-3 mb-5 list-decimal list-inside'>
          <li>* Hydration and Moisturization: Ruby Passion (deep red)</li>
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

export default BeautyProducts;
