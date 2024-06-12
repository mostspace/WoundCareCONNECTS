import React from 'react'
import { servicesRangeImg } from 'src/assets'
import styles from 'src/style'
import { servicesRange } from '../../constants'

const ServicesRange = () => {
  return (
    <section id='serviceRange' className={`mb-10`}>
        <p className='text-[26px] leading-[40px]'>At Wound Care Connects we specialize in providing comprehensive wound care services tailored to the unique needs of our patients. Our experienced team is proficient in treating a wide range of wounds, including:</p>
        <div className='sm:flex justify-between mt-8'>
            <div className='w-[60%] flex justify-start items-center pb-10 pl-5'>
                <ul className='list-disc text-[24px] ss:text-[24px] leading-[30px] md:leading-[40px] lg:leading-[40px] wc-ul'>
                    {servicesRange.map((item) => (
                        <li key={item.id}>{item.content}</li>
                    ))}
                </ul>
            </div>  
            <div className='w-[40%] md:flex'>
                <img src={servicesRangeImg} alt='Get to know us' className='w-full rounded-[16px]' />
            </div>
        </div>
    </section>
  )
}

export default ServicesRange
