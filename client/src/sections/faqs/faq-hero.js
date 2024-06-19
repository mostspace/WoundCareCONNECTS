import React from 'react'
import { faqImg } from 'src/assets'
import styles from 'src/style'

const faqHero = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col relative z-[1]'>
        <div className='flex justify-center items-center'>
          <h2 className={`text-[28px] leading-[40px] font-manrope font-semibold sm:text-[48px] sm:leading-[60px] text-black text-center`}> Our Commitment to In-Home<span className='text-gradient'> Wound Care </span>Services</h2>
        </div>
        <div className='flex flex-col h-[500px]'>
            <img src={faqImg} alt='Services' className='w-full h-[500px] object-cover rounded-[16px]' />
        </div>
      </div>    
    </section>
  )
}

export default faqHero;
