import React from 'react';
import SingleCard from './SingleCard';
import { data } from '../../constant/data';

function CardsSection() {
  return (
    <div className='flex flex-wrap justify-center mx-auto'>
      {data.map((item, index) => (
        <SingleCard key={index} item={item} />
      ))}
    </div>
  );
}

export default CardsSection;
