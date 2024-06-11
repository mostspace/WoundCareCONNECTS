import React from 'react'
import { quotes } from '../assets'

const TextCard = ({ content, title }) => {
  return (
    <div className='flex flex-col px-10 py-8 rounded-[20px] my-5 text-card'>
      <h4 className='font-manrope font-semibold text-[20px] leading-[32px] wc-text-primary'>{title}</h4>
      <p className='font-manrope font-normal text-[16px] leading-[32px] mt-5'>
        {content}
      </p>
    </div>
  )
}

export default TextCard
