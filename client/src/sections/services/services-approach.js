import React from 'react'
import { servicesApproachImg1, servicesApproachImg2 } from 'src/assets'
import styles from 'src/style'
import { servicesApproach } from '../../constants'

const ServicesApproach = () => {
  return (
    <section id='serviceRange' className={`mb-10 h-full`}>
        <h2 className={`${styles.heading2} text-black py-10`}>Our personalized approach to<span className='text-gradient'> Wound Care </span>includes:</h2>
        <div className='sm:flex gap-20 justify-between mt-8'>
            <div className='w-[50%] grid sm:grid-rows-2 gap-8'>
                <img src={servicesApproachImg1} alt='Get to know us' className='w-full rounded-[16px]' />
                <img src={servicesApproachImg2} alt='Get to know us' className='w-full rounded-[16px]' />
            </div>
            <div className='flex justify-start items-center pb-10 pl-5'>
                <ul className='list-disc text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px] wc-ul'>
                    {servicesApproach.map((item) => (
                        <li key={item.id}>{item.content}</li>
                    ))}
                </ul>
            </div>
        </div>
        <p className='text-[20px] leading-[40px] text-gray-600'>At Wound Care Connects we are committed to delivering exceptional wound care services with compassion, expertise, and dedication, empowering our patients on their journey to optimal health and well-being.</p>
    </section>
  )
}

export default ServicesApproach
