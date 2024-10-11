import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SecCard() {
  return (
    <>
    <div className='flex ml-12 mt-10'>
   
   <div className=" w-80 h-70 bg-white text-black ml-12 border-2 rounded-lg border-pink-600 p-3 shadow-2xl transition-transform transform hover:scale-105">
     <Link href={"/AllCosmatics"}>
       <Image className='rounded-lg'
         src="/allcosmetic.webp"
         alt="logo"
         width={300}
         height={300}
       />
       <h1 className='font-bold text-xl underline mt-3 mb-2'>Skincare Products:</h1>
       <p>These products include cleansers, moisturizers, serums, sunscreens, and treatments s designed to address specific concerns such as acne, aging,  We are also involved in Cosmetic product photography — dryness, or sensitivity...</p>
     </Link>
     <div className="flex justify-end mt-2">
       <Link href={"/AllCosmatics"}>
         <button className='border-pink-600 p-2 font-bold text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white'>
           See more
         </button>
       </Link>
     </div>
</div>

<div className=" w-80 h-70 bg-white text-black ml-12 border-2 rounded-lg border-pink-600 p-3 hover:shadow-2xl transition-transform transform hover:scale-105">
     <Link href={"/beautyProducts"}>
       <Image className='rounded-lg'
         src="/brushes.jpg"
         alt="logo"
         width={500}
         height={500}
       />
       <h1 className='font-bold text-xl underline mt-3 mb-2'>Beauty Products:</h1>
       <p>Pamper your hands with our Deluxe Manicure Kit, designed  Makeup artists generally have new styles that they want to to give you a salon-quality experience at home. This set includes everything you need for perfectly polished nails cuticle trimmer...</p>
     </Link>
     <div className="flex justify-end mt-2">
       <Link href={"/beautyProducts"}>
         <button className='border-pink-600 p-2 font-bold text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white'>
           See more
         </button>
       </Link>
     </div>
</div>

<div className=" w-80 h-70 bg-white text-black ml-12 border-2 rounded-lg border-pink-600 p-3 hover:shadow-2xl transition-transform transform hover:scale-105">
     <Link href={"/Cosmatics"}>
       <Image className='rounded-lg'
         src="/cosmetics.webp"
         alt="logo"
         width={300}
         height={300}
       />
       <h1 className='font-bold text-xl underline mt-3 mb-2'>All Cosmetic And Beauty Products:</h1>
       <p>Products are depicted in action and not by themselves in product photography for magazines, banners, and advertisements. This makes your photography more engaging and helps grab viewers' attention.....</p>
     </Link>
     <div className="flex justify-end mt-2">
       <Link href={"/Cosmatics"}>
         <button className='border-pink-600 p-2 font-bold text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white'>
           See more
         </button>
       </Link>
     </div>
</div>

</div>
    </>                     
    
  )
}

export default SecCard
