import Button from '@/components/button'
import React from 'react'
import Image from 'next/image'

function Cosmatics() {
  return (
    <div className='flex ml-12 mt-10 justify-left '>
    <Image className='scale-up-center rounded-lg'
        src="/cosmetics.webp" 
        alt="logo"
        width={500} 
        height={500}/>
    
    <div className='scale-up-center w-full'>
        <h1 className='font-bold text-4xl underline mt-5 mb-2 ml-10  text-pink-500'>All Cosmetic And Beauty Products:</h1>
    
        <h3 className=' ml-10 mt-3 mb-2 font-bold text-2xl'>Description:</h3>
    
        <p className='ml-10 mt-3 mb-2'>Cosmetic and beauty products encompass a wide range of items designed to enhance appearance, improve skin health, and promote self-care. These products cater to various needs, from makeup that enhances facial features to skincare that maintains healthy, glowing skin. They also include haircare, fragrances, and tools that aid in achieving desired beauty goals.</p>
    
        <h3 className=' ml-10 mt-3 mb-2 font-bold text-xl'>Key Features:</h3>
    
        <ol className='ml-10 mt-3 mb-5'>
    
        <li>* Face Powder: Sets foundation and concealer, absorbing excess.</li>
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

export default Cosmatics
