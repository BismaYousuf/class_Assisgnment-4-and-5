import React from 'react'
import Image from 'next/image'

function About() {
  return (
   <>
    <div className='scale-up-center flex mt-20 justify-center text-pink-500 text-5xl font-extrabold '><h1>About Us</h1></div>
    <div className='scale-up-center flex p-10 justify-center '><p>Welcome to Beauty Care, your trusted destination for all things beauty and skincare. We believe that beauty is more than skin deep—it’s about feeling confident, radiant, and empowered in your own skin. Our mission is to provide you with the best beauty products, expert advice, and tips that cater to your unique needs and preferences.</p></div>

    <div className=' scale-up-center m-5 mb-10 mt-2 rounded-2xl shadow-2xl shadow-pink-500 border-2 border-pink-600 p-3 shadow-3xl flex '>
    <Image className='rounded-full' src={'/aboutpage.jpg'}
     alt={'pic'}
     width={300}
     height={300}
     />
     <div className='ml-5 mt-10 text-pink-500'><p>HER beauty has partnered up with Taskeen Health Initiative, which is a non-profit organization dedicated to transforming attitudes and behaviors towards mental health and well being in Pakistan. Their mission is to increase mental health awareness, provide accessible services and advocate for policy change.

    Through our HerVoice wellness pledge, we aim to foster connection and celebrate individuality beyond social profiles. HER with Taskeen’s support is on a mission to uplift women through every phase of their lives; The good, the rough, and everything in between, we've got you through it all!
    Everyone has a voice, and every voice deserves to be heard.

    Let's spark conversations and drive positive change together ✨</p></div>


    </div>

   
   </>
  )
}

export default About
