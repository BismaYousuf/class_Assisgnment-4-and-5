import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function SingleCard(props: { item: { id: number; src: string; heading: string; para: string } }) {
  return (
    <div className=" w-80 h-70 bg-white text-black ml-12 border-2 rounded-lg border-pink-600 p-3 shadow-3xl transition-transform transform hover:scale-105 hover:shadow-sm">
      <Link href={`/myProduct/${props.item.id}`}>
        <Image
          className='rounded-lg'
          src={props.item.src}
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className='font-bold text-xl underline mt-3 mb-2'>{props.item.heading}</h1>
        <p>{props.item.para}</p>
        <div className="flex justify-end mt-2">
          <button className='border-pink-600 p-2 font-bold text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white transition'>
            See more
          </button>
        </div>
      </Link>
    </div>
  );
}

export default SingleCard;
