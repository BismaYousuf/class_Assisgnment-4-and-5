import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import { data } from '../../../../constant/data';

function DynamicIdPage({ params }: { params: { id: number } }) {
  const item = data.find((item) => item.id === Number(params.id));

  return (
    <>
      <div className='flex flex-col md:flex-row ml-4 mt-10 justify-start'>
        {item ? (
          <>
            <Image
              className='scale-up-center rounded-lg w-full max-w-[500px]'
              src={item.src} 
              alt={item.heading} 
              width={500} 
              height={500} 
            />
            
            <div className='scale-up-center w-full max-w-xl md:ml-10'> 
              <h1 className='font-bold text-2xl md:text-4xl underline mt-5 mb-2 text-pink-500'>{item.heading}</h1>
              
              <h3 className='mt-3 mb-2 font-bold text-xl'>Description:</h3>
              <p className='mt-3 mb-2'>{item.para}</p>
              
              <h3 className='mt-3 mb-2 font-bold text-lg'>Key Features:</h3>
              <ol className='mt-3 mb-5 list-decimal list-inside'>
                <li>* Hydrating and nourishing ingredients</li>
                <li>* Long-lasting wear</li>
                <li>* Ideal for all skin types</li>
                <li>* Easy application</li>
                <li>* Perfect for everyday use</li>
              </ol>
              
              <div>
                <Button />
              </div>
            </div>
          </>
        ) : (
          <p className='ml-10 mt-5'>Item not found.</p>
        )}
      </div>
    </>
  );
}

export default DynamicIdPage;
