import React from 'react'
import { product1, product2, product3, product4, product5, product6, product7, product8 } from 'src/assets'

const ProductCard = ({ content, title, id }) => {
  let imageSrc; // Use a variable for the image source
  switch (id) { // Use a switch statement to map image names
    case "product1":
      imageSrc = product1; 
      break;
    case "product2":
      imageSrc = product2;
      break;
    case "product3":
      imageSrc = product3;
      break;
    case "product4":
      imageSrc = product4;
      break;
    case "product5":
      imageSrc = product5;
      break;
    case "product6":
      imageSrc = product6;
      break; // Add cases for the remaining products
    case "product7":
      imageSrc = product7;
      break;
    case "product8":
      imageSrc = product8;
      break;
    default:
      imageSrc = ''; // Default to an empty string if no match
  }
  return (
    <div className='flex flex-col gap-[20px] px-5 py-5 rounded-[20px] sm:my-5 text-card'>
      <div className='flex justify-center items-center h-[150px] w-full'>
        <img src={imageSrc} alt={title} className='h-full' />
      </div>
      <h4 className='font-manrope font-semibold text-[20px] leading-[32px] wc-text-primary text-center'>{title}</h4>
      <p className='font-manrope font-normal text-[16px] leading-[32px]'>
        {content}
      </p>
    </div>
  )
}

export default ProductCard
