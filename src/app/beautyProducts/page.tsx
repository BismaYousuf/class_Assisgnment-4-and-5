import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'

function BeautyProducts() {
  return (
    <div className='flex ml-12 mt-10 justify-left '>
    <Image className='scale-up-center rounded-lg'
        src="/brushes.jpg" 
        alt="logo"
        width={500} 
        height={500}/>
    
    <div className='scale-up-center w-full'>
        <h1 className='font-bold text-4xl underline mt-5 mb-2 ml-10  text-pink-500'>Beauty Products:</h1>
    
        <h3 className=' ml-10 mt-3 mb-2 font-bold text-2xl'>Description:</h3>
    
        <p className='ml-10 mt-3 mb-2'>Beauty products are cosmetic and skincare items designed to enhance physical appearance, promote personal care, and boost confidence. They range from makeup and haircare to skincare and body care, each with specific functions to improve, highlight, or maintain certain features. Beauty products are widely used by individuals of all ages and skin types, catering to various aesthetic preferences and needs.</p>
    
        <h3 className=' ml-10 mt-3 mb-2 font-bold text-xl'>Key Features:</h3>
    
        <ol className='ml-10 mt-3 mb-5'>
    
        <li>* Hydration and Moisturization: Ruby Passion (deep red)</li>
        <li>* Anti-Aging Properties: Velvet matte</li>
        <li>* Sun Protection:  Up to 8 hours of wear</li>
        <li>* Cleansing and Detoxification: Contains jojoba oil and shea butter</li>
        <li>* Soothing and Calming: Medium-to-full, buildable</li>
        <li>* Acne Control: Luminous, dewy</li>
    
        </ol>
        <div>
            <Button/>
        </div>
    
        </div>
        </div>
  )
}

export default BeautyProducts
