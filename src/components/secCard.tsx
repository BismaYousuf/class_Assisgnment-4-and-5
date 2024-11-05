import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SecCard() {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-10 gap-4 sm:gap-6">
        {/* First Card */}
        <div className="w-full max-w-[90%] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto bg-white text-black border-2 rounded-lg border-black p-3 shadow-2xl transition-transform transform hover:scale-105">
          <Link href={"/AllCosmatics"}>
            <Image
              className="rounded-lg"
              src="/allcosmetic.webp"
              alt="Skincare Products"
              width={300}
              height={300}
              layout="responsive"
            />
            <h1 className="font-bold text-lg sm:text-xl underline mt-3 mb-2">Skincare Products:</h1>
            <p className="text-sm sm:text-base">
              These products include cleansers, moisturizers, serums, sunscreens, and treatments designed to address specific concerns such as acne, aging, dryness, or sensitivity...
            </p>
          </Link>
          <div className="flex justify-end mt-2">
            <Link href={"/AllCosmatics"}>
              <button className="border-black p-2 font-bold text-black border-2 rounded-3xl hover:bg-black hover:text-white">
                See more
              </button>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full max-w-[90%] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto bg-white text-black border-2 rounded-lg border-black p-3 shadow-2xl transition-transform transform hover:scale-105">
          <Link href={"/beautyProducts"}>
            <Image
              className="rounded-lg"
              src="/brushes.jpg"
              alt="Beauty Products"
              width={500}
              height={500}
              layout="responsive"
            />
            <h1 className="font-bold text-lg sm:text-xl underline mt-3 mb-2">Beauty Products:</h1>
            <p className="text-sm sm:text-base">
              Pamper your hands with our Deluxe Manicure Kit, designed to give you a salon-quality experience at home. This set includes everything you need for perfectly polished nails...
            </p>
          </Link>
          <div className="flex justify-end mt-2">
            <Link href={"/beautyProducts"}>
              <button className="border-black p-2 font-bold text-black border-2 rounded-3xl hover:bg-black hover:text-white">
                See more
              </button>
            </Link>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full max-w-[90%] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto bg-white text-black border-2 rounded-lg border-black p-3 shadow-2xl transition-transform transform hover:scale-105">
          <Link href={"/Cosmatics"}>
            <Image
              className="rounded-lg"
              src="/cosmetics.webp"
              alt="All Cosmetic And Beauty Products"
              width={300}
              height={300}
              layout="responsive"
            />
            <h1 className="font-bold text-lg sm:text-xl underline mt-3 mb-2">All Cosmetic And Beauty Products:</h1>
            <p className="text-sm sm:text-base">
              Products are depicted in action and not by themselves in product photography for magazines, banners, and advertisements. This makes your photography...
            </p>
          </Link>
          <div className="flex justify-end mt-2">
            <Link href={"/Cosmatics"}>
              <button className="border-black p-2 font-bold text-black border-2 rounded-3xl hover:bg-black hover:text-white">
                See more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecCard;
