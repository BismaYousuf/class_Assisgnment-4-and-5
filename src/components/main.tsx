import React from 'react'
import Image from 'next/image'

function MainSection() {
  return (
  <>
  {/* ---------------------------------------- main section ------------------------------ */}

<div className='scale-up-center flex justify-center mt-10 mb-10 '  >
  <Image className='rounded-2xl shadow-2xl shadow-pink-500 border-2 border-pink-600'  
    src={'/mainpage.jpeg'}
    alt={'pic'}
    width={850}
    height={500}
  />
</div>
  
  </>
  )
}

export default MainSection
