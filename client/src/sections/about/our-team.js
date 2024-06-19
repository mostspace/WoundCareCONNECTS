import React from 'react'
import { ourTeamImg } from 'src/assets'
import { ourTeam } from '../../constants'
import { ourSupport } from 'src/constants'
import styles from 'src/style'
import TextCard from 'src/components/text-card'

const OurTeam = () => {
  return (
    <section id='serviceRange' className="mb-10 flex flex-col gap-[40px] sm:gap-[80px]">
        <div className='flex justify-center items-center'>
          <h2 className={`text-[28px] sm:${styles.heading2} text-black text-center`}>Our Expert<span className='text-gradient'> Care </span>Team</h2>
        </div>
        <div className='md:flex justify-between gap-20 items-center'>
            <div className='w-full'>
                <img src={ourTeamImg} alt='Get to know us' className='w-full h-full rounded-[16px]' />
            </div>
            <div className='w-full sm:flex flex-col gap-[20px]'>
                <p className='text-[18px] sm:text-[20px] leading-[30px] sm:leading-[40px] mt-10 sm:mt-0'>At Wound Care Connects we specialize in providing comprehensive wound care services tailored to the unique needs of our patients. Our experienced team is proficient in treating a wide range of wounds, including:</p>
                <div className='flex justify-start items-center pl-5 mt-10 sm:mt-0'>
                    <ul className='list-disc text-[18px] ss:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[40px] wc-ul'>
                        {ourTeam.map((item) => (
                            <li key={item.id}>{item.content}</li>
                        ))}
                    </ul>
                </div>  
                <p className='text-[18px] sm:text-[20px] leading-[30px] sm:leading-[40px]'>Each member is dedicated to providing exceptional care, ensuring that our patients receive the highest quality of service tailored to their specific needs.</p>
            </div>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer relative z-[1]'>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
            <div className="col-span-2">
                <div className="grid sm:grid-cols-2 gap-8">
                {ourSupport.map((card) => (
                    <TextCard key={card.id} {...card} />
                ))}
                </div>
            </div>
            </div>
        </div>    
    </section>
  )
}

export default OurTeam
