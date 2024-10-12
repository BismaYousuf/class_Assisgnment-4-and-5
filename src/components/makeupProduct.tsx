import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';

function MakeupProduct() {
  return (
    <>
      <div className="flex flex-col md:flex-row ml-5 sm:ml-10 md:ml-12 mt-10 justify-center items-center md:items-start">
        {/* Image Section */}
        <Image
          className="scale-up-center rounded-lg"
          src="/lipsticks.jpg"
          alt="Velvet Matte Lipstick"
          width={400} 
          height={400}
        />
        
        {/* Text and Details Section */}
        <div className="scale-up-center w-full mt-8 md:mt-0 md:ml-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl underline text-pink-500">
            Velvet Matte Lipstick
          </h1>

          <h3 className="mt-4 mb-2 font-bold text-xl sm:text-2xl">Description:</h3>
          <p className="mt-3 mb-2 text-base sm:text-lg">
            Experience rich, velvety color with our Velvet Matte Lipstick in Ruby Passion, a bold, deep red shade that adds a touch of elegance to any look. This long-lasting formula provides intense pigmentation in just one swipe, while its matte finish ensures a chic, sophisticated appearance. Infused with jojoba oil and shea butter, it keeps your lips soft and hydrated, preventing dryness and cracking. Perfect for all-day wear, whether at the office or a night out, this lipstick stays vibrant and comfortable for hours.
          </p>

          <h3 className="mt-4 mb-2 font-bold text-lg sm:text-xl">Key Features:</h3>
          <ol className="list-disc list-inside">
            <li>Shade: Ruby Passion (deep red)</li>
            <li>Finish: Velvet matte</li>
            <li>Long-wearing: Up to 8 hours of wear</li>
            <li>Hydrating Formula: Contains jojoba oil and shea butter</li>
            <li>Coverage: Medium-to-full, buildable</li>
            <li>Finish: Luminous, dewy</li>
          </ol>

          {/* Button */}
          <div className="mt-5">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeupProduct;
