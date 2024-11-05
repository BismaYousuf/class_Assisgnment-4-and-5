import React from 'react';
import Image from 'next/image';

function MainSection() {
  return (
    <>
      {/* ---------------------------------------- main section ------------------------------ */}
      <div className="scale-up-center flex justify-center mt-10 mb-10">
        <div className="w-full max-w-4xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <Image
            className="rounded-2xl shadow-2xl  border-2 border-black"
            src={'/mainpage.jpg'}
            alt={'pic'}
            width={850}
            height={500}
            layout="responsive" 
          />
        </div>
      </div>
    </>
  );
}

export default MainSection;
