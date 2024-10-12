import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <>
      <div className="scale-up-center flex mt-20 justify-center text-pink-500 text-3xl sm:text-4xl md:text-5xl font-extrabold">
        <h1>About Us</h1>
      </div>
      
      <div className="scale-up-center flex p-4 sm:p-6 md:p-8 justify-center text-sm sm:text-base md:text-lg">
        <p className="max-w-screen-md text-center"> 
          Welcome to Beauty Care, your trusted destination for all things beauty and skincare. We believe that beauty is more than skin deep—it’s about feeling confident, radiant, and empowered in your own skin. Our mission is to provide you with the best beauty products, expert advice, and tips that cater to your unique needs and preferences.
        </p>
      </div>

      <div className="scale-up-center m-4 mb-8 mt-2 rounded-2xl shadow-2xl shadow-pink-500 border-2 border-pink-600 p-3 flex flex-col md:flex-row items-center max-w-screen-md mx-auto"> 
        <div className="relative w-32 h-32 md:w-48 md:h-48"> 
          <Image
            className="rounded-full" 
            src={'/aboutpage.jpg'}
            alt={'About Us'}
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        
        <div className="mt-5 md:mt-0 md:ml-5 text-pink-500 text-sm sm:text-base md:text-lg max-w-xl">
          <p>
            HER beauty has partnered up with Taskeen Health Initiative, a non-profit organization dedicated to transforming attitudes and behaviors towards mental health and well-being in Pakistan. Their mission is to increase mental health awareness, provide accessible services, and advocate for policy change.
          </p>
          <p className="mt-4">
            Through our HerVoice wellness pledge, we aim to foster connection and celebrate individuality beyond social profiles. HER with Taskeen’s support is on a mission to uplift women through every phase of their lives; the good, the rough, and everything in between, we've got you through it all!
          </p>
          <p className="mt-4">
            Everyone has a voice, and every voice deserves to be heard.
          </p>
          <p className="mt-4">
            Let's spark conversations and drive positive change together ✨
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
