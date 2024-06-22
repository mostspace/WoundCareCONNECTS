import React from 'react'
import { getToKnowUs } from 'src/assets'
import Button from 'src/components/button'

const GetToKnowUs = () => {
  return (
    <section id='product' className={`md:flex wc-card rounded-[20px] px-5`}>
      <div className="md:w-[55%] grid grid-rows-[auto_1fr] items-end">
        <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center py-[30px]`}><span className='text-gradient'>Get To Know Us</span></h2>
        <img
          src={getToKnowUs}
          alt='Get to know us'
          className='w-[100%] relative z-[5]'
        />
      </div>
      <div className='md:w-[45%] flex flex-col justify-center items-center mt-3 sm:py-10 lg:mt-10 py-3'>
        <p className={`text-[18px] leading-[35px] sm:text-[20px] lg:text-[28px] px-2 sm:px-5 sm:leading-[45px]`}>
          Patients will receive care from a wound physician offering bedside wound services, a wound care nurse trained in chronic wound management, and a collaborative interdisciplinary team from various specialties.
        </p>
        {/* <div className='w-full text-center sm:text-right'>
          <Button title="Learn More" styles={'mt-5 sm:mt-10'} />
        </div> */}
      </div>  
    </section>
  )
}

export default GetToKnowUs
