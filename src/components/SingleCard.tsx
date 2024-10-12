import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function SingleCard(props: { item: { id: number; src: string; heading: string; para: string } }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-xs h-auto bg-white text-black mx-2 mb-6 border-2 rounded-lg border-pink-600 p-3 shadow-3xl transition-transform transform hover:scale-105 hover:shadow-sm">
      <Link href={`/myProduct/${props.item.id}`}>
        <div>
          <Image
            className="rounded-lg"
            src={props.item.src}
            alt="Product image"
            width={300}
            height={300}
            layout="responsive" 
          />
          <h1 className="font-bold text-lg sm:text-xl underline mt-3 mb-2">{props.item.heading}</h1>
          <p className="text-sm sm:text-base">{props.item.para}</p>
          <div className="flex justify-end mt-2">
            <button className="border-pink-600 p-2 font-bold text-pink-600 border-2 rounded-3xl hover:bg-pink-600 hover:text-white transition">
              See more
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SingleCard;
