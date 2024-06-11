import React from 'react'
import { woundCareManagement } from '../../constants'
import { heart } from '../../assets'
import styles from '../../style'
import TextCard from '../../components/TextCard'

const WoundCareManagement = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center md:gap-16'>
          <h2 className={`${styles.heading2} text-black text-center`}><span className='text-gradient'> Wound Care</span> Management</h2>
          <img src={heart} alt="Heart" className='hidden sm:block'/>
        </div>
        <div className='w-full md:mt-6'>
          <p className={`${styles.paragraph} text-left w-full text-black`}>
            Partnering for Comprehensive Treatment Solutions. Our dedicated physicians collaborate with home health agencies and SNFs offering specialized wound care, personalized treatment plans, expert consultation, and ongoing staff education. With weekly visits, our physicians seamlessly integrate into your patient care team, ensuring continuity and quality.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer relative z-[1]'>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {woundCareManagement.slice(0, 2).map((card) => (
                <TextCard key={card.id} {...card} />
              ))}
            </div>
          </div>
          <h2 className='text-center text-[21px] font-semibold'> Access top-tier<span className='text-gradient'> Wound Care Services</span> right at your facility and in patients' homes.</h2>
          <div className="col-span-2">
            <div className="grid sm:grid-cols-3 gap-8">
              {woundCareManagement.slice(2).map((card) => (
                <TextCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default WoundCareManagement
