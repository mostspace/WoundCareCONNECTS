import React from 'react'
import { woundType1, woundType2, woundType3} from 'src/assets'

const WoundTypeCard = ({ content, title, id }) => {
  let imageSrc;
  switch (id) { 
    case "woundType1":
      imageSrc = woundType1; 
      break;
    case "woundType2":
      imageSrc = woundType2;
      break;
    case "woundType3":
      imageSrc = woundType3;
      break;
    default:
      imageSrc = '';
  }
  return (
    <div className='flex flex-col px-5 py-5 rounded-[20px] gap-[10px] sm:my-5 text-card justify-between'>
      <div className='flex flex-col gap-[10px]'>
        <h4 className='font-manrope font-semibold text-[20px] leading-[32px] wc-text-primary text-center'>{title}</h4>
        <p className='font-manrope font-normal text-[16px] leading-[32px]'>
          {content}
        </p>
      </div>
      <div className='flex justify-center items-center h-[243px] w-full'>
        <img src={imageSrc} alt={title} className='h-full rounded-[5px]' />
      </div>
    </div>
  )
}

export default WoundTypeCard
