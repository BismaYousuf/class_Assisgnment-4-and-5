import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
function MakeupProduct() {
    return (
        <>
            <div className='flex ml-12 mt-10 justify-left '>
        <Image className='scale-up-center rounded-lg'
            src="/lipsticks.jpg" 
            alt="logo"
            width={500} 
            height={500}/>
        
        <div className='scale-up-center w-full'>
            <h1 className='font-bold text-4xl underline mt-5 mb-2 ml-10  text-pink-500'> Velvet Matte Lipstick</h1>
        
            <h3 className=' ml-10 mt-3 mb-2 font-bold text-2xl'>Description:</h3>
        
            <p className='ml-10 mt-3 mb-2'>Experience rich, velvety color with our Velvet Matte Lipstick in Ruby Passion, a bold, deep red shade that adds a touch of elegance to any look. This long-lasting formula provides intense pigmentation in just one swipe, while its matte finish ensures a chic, sophisticated appearance. Infused with jojoba oil and shea butter, it keeps your lips soft and hydrated, preventing dryness and cracking. Perfect for all-day wear, whether at the office or a night out, this lipstick stays vibrant and comfortable for hours.</p>
        
            <h3 className=' ml-10 mt-3 mb-2 font-bold text-xl'>Key Features:</h3>
        
            <ol className='ml-10 mt-3 mb-5'>
        
            <li>* Shade: Ruby Passion (deep red)</li>
            <li>* Finish: Velvet matte</li>
            <li>* Long-wearing: Up to 8 hours of wear</li>
            <li>* Hydrating Formula: Contains jojoba oil and shea butter</li>
            <li>* Coverage: Medium-to-full, buildable</li>
            <li>* Finish: Luminous, dewy</li>
        
            </ol>
            <div>
                <Button/>
            </div>
        
            </div>
            </div>
        </>
      )
}

export default MakeupProduct
