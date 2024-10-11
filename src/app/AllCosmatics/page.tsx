import React from 'react'
import Button from '@/components/button'
import Image from 'next/image'

function AllCosmatics() {
  return (
    <>
        <div className='flex ml-12 mt-10 justify-left '>
    <Image className='scale-up-center rounded-lg'
        src="/allcosmetic.webp" 
        alt="logo"
        width={500} 
        height={500}/>
    
    <div className='scale-up-center w-full'>
        <h1 className='font-bold text-4xl underline mt-5 mb-2 ml-10  text-pink-500'>Skincare Products:</h1>
    
        <h3 className=' ml-10 mt-3 mb-2 font-bold text-2xl'>Description:</h3>
    
        <p className='ml-10 mt-3 mb-2'>Skincare products are formulated to maintain, protect, and enhance the health and appearance of the skin. They are designed to address various skin concerns such as hydration, aging, sun protection, cleansing, and more. These products cater to different skin types—normal, dry, oily, combination, and sensitive—and are infused with active ingredients to target specific needs.</p>
    
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
    </>
  )
}

export default AllCosmatics
