import React from 'react'
import { servicesHero } from 'src/assets'
import styles from 'src/style'

const ServicesHero = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center'>
          <h2 className={`${styles.heading2} text-black text-center`}>Discover Our Home-Based<span className='text-gradient'> Wound Care </span> Services</h2>
        </div>
        <div className='w-full my-6'>
          <p className={`${styles.paragraph} text-center w-full text-black`}>
            Explore how our specialized wound care services bring expert treatment directly to your doorstep.
          </p>  
        </div>
        <div className='flex h-[550px]'>
            <img src={servicesHero} alt='Services' className='w-full h-full object-cover rounded-[16px]' />
        </div>
      </div>    
    </section>
  )
}

export default ServicesHero
