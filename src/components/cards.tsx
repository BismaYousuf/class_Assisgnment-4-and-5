import React from 'react'
import SingleCard from './SingleCard';
import { data } from '../../constant/data';

function CardsSection() {

 
  return (
    <>
      <div className='flex ml-12  '>

      {data.map((item, index)=>{return <SingleCard key={index}  item={item}/>})}

      </div>
    </>
  );
}

export default CardsSection;



