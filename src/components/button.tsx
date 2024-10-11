import Link from 'next/link'
import React from 'react'

function Button() {
  return (
    <div>
     <Link href={'/'}><button className=' w-80 border-pink-600 p-2 text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white ml-10'>Go Back</button></Link>
      
    </div>
  )
}

export default Button
