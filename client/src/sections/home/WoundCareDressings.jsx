import React from 'react'
import { woundCareDressings } from '../../constants'
import { blueCross } from '../../assets'
import styles from '../../style'

const WoundCareDressings = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative px-5 ss:px-16`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center mb-20 gap-10'>
            <img src={blueCross} alt="" className='hidden sm:block' />
            <h2 className={`${styles.heading2} text-black text-center`}><span className='text-gradient'> Wound Care</span> Dressings</h2>
        </div>
        <div className='w-full md:mt-6'>
          <p className={`text-[18px] ss:text-[24px] text-left w-full text-black`}>
            Redefining Standards in Wound Care Delivery. Our program ensures prompt transmission and delivery of physician-recommended dressings within 48 hours, optimizing treatment timelines and minimizing waste. Covered by Medicare Part B, our high-quality products cater to various wound types, offering tailored recommendations based on factors like etiology, stage, exudate level, and location.
          </p>  
        </div>
        <div className='mt-5'>
          <ul className='list-disc md:list-inside text-[16px] ss:text-[20px] leading-[30px] ss:leading-[45px] wc-ul'>
              {woundCareDressings.map((item) => (
                  <li key={item.id}>{item.content}</li>
              ))}
          </ul>
        </div>
      </div>     
    </section>
  )
}

export default WoundCareDressings
