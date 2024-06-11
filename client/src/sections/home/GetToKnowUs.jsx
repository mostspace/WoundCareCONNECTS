import React from 'react'
import { getToKnowUs } from '../../assets'
import styles, { layout } from '../../style'
import Button from '../../components/Button'

const GetToKnowUs = () => {
  return (
    <section id='product' className={`md:flex wc-card rounded-[20px] px-3 md:px-5 mb-20`}>
      <div className="md:w-[55%] sm:pt-16 grid grid-rows-[auto_1fr] items-end">
        <h2 className={`${styles.heading2} text-black text-center pb-10`}><span className='text-gradient'>Get To Know Us</span></h2>
        <img
          src={getToKnowUs}
          alt='Get to know us'
          className='w-[100%] relative z-[5]'
        />
      </div>
      <div className='md:w-[45%] flex-col justify-center items-center py-10 lg:mt-10'>
        <p className={`text-[18px] sm:text-[20px] lg:text-[28px] px-5 leading-[45px]`}>
          Patients will receive care from a wound physician offering bedside wound services, a wound care nurse trained in chronic wound management, and a collaborative interdisciplinary team from various specialties.
        </p>
        <div className='w-full text-center sm:text-right'>
          <Button title="Learn More" styles={'mt-5 sm:mt-10'} />
        </div>
      </div>  
    </section>
  )
}

export default GetToKnowUs
