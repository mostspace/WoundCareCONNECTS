import React from 'react'
import { aboutHero } from 'src/assets'
import styles from 'src/style'

const AboutHero = () => {
  return (
    <section id='clients' className={`flex flex-col relative`}>
      <div className='w-full flex flex-col relative z-[1] gap-[48px]'>
        <div className='flex justify-center items-center'>
          <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center`}> Our Commitment to In-Home<span className='text-gradient'> Wound Care </span>Services</h2>
        </div>
        <div className='w-full'>
            <p className={`${styles.paragraph} sm:text-center w-full text-black`}>
                At Wound Care Connects, we're dedicated to providing top-tier wound care services in the comfort of your own home. Our customized in-home health care solutions cater to the unique needs of each individual, fostering a sense of security and enabling them to lead fulfilling lives. Through our comprehensive range of integrated home-based wound care services, we offer unwavering support to both patients and their families, addressing present concerns while preparing for future health challenges. Our compassionate and expert teams seamlessly complement existing care frameworks, ensuring personalized care for every individual.          
            </p>  
        </div>
        <div className='flex flex-col h-[500px]'>
            <img src={aboutHero} alt='Services' className='w-full h-[500px] object-cover rounded-[16px]' />
        </div>
      </div>    
    </section>
  )
}

export default AboutHero
