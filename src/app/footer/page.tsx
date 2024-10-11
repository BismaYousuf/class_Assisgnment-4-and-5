import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-pink-500 text-white py-10 mt-10'>
       
        <div className='container mx-auto px-5'>
   <div className='flex justify-between flex-wrap'>

            <div className='mb-5'>
              <h2 className='text-2xl font-bold mb-2'>Let’s Connect:</h2>
              <p className='text-lg'>Email: <a href="mailto:bismayousuf540@gmail.com" className='underline'>bismayousuf540@gmail.com</a></p>
              <p className='text-lg'>Phone: <a href="tel:+1234567890" className='underline'>1234567890</a></p>
              <p className='text-lg'>Office: 123 Main Street, Anytown, USA</p>
            </div>

           
<div className='mb-5 text-right'>
              <h2 className='text-2xl font-bold mb-2'>Follow Us:</h2>
    <ul className='space-y-2'>
       <li>
        <Link href="#"  className='hover:text-gray-200 transition-colors'>Facebook </Link>
       </li>
      <li>
       <Link href="#"  className='hover:text-gray-200 transition-colors'>Instagram </Link>
     </li>
     <li>
       <Link href="#"  className='hover:text-gray-200 transition-colors'>Twitter</Link>
      </li>
   </ul>
 </div>
      </div>

        
          <div className='border-t border-pink-300 mt-8 pt-5 text-center'>
            <p className='text-sm'>&copy; 2024 Bisma Yousuf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
