import React from 'react'
import { faqImg } from 'src/assets'
import styles from 'src/style'

const faqsHero = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex flex-col gap-[48px]'>
        <div className='flex justify-center items-center'>
          <h2 className={`text-[28px] leading-[40px] font-manrope font-semibold sm:text-[48px] sm:leading-[60px] text-black text-center`}> <span className='text-gradient'>Frequently Asked Questions</span></h2>
        </div>
        <div className='flex flex-col h-[500px] mt-10 sm:mt-0'>
            <img src={faqImg} alt='Services' className='w-full h-[500px] object-cover rounded-[16px]' />
        </div>
      </div>    
    </section>
  )
}

export default faqsHero;
