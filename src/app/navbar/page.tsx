import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
      {/* -------------------------------------navigation bar---------------------------------------- */}
      <div className="bg-pink-200 -300 mb-5 p-2">
        <Link href={'/'}>
          <Image 
            src="/beautylogo.png" 
            alt="logo" 
            width={70} 
            height={70}
            className="hover:scale-110 transition-transform duration-300" 
            
          />
        </Link>
      </div>

      <div className='flex justify-end gap-20 text-xl font-bold text-pink-600 -mt-20 mr-5'>


        {/* Adding hover effects to the navigation links */}


        <Link href="/#">
          <span className="hover:text-pink-800 hover:underline transition-colors duration-300">
            Home
          </span>
        </Link>
        <Link href="/about">
          <span className="hover:text-pink-800 hover:underline transition-colors duration-300">
            About
          </span>
        </Link>
     
        <Link href="/contactUs">
          <span className="hover:text-pink-800 hover:underline transition-colors duration-300">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
