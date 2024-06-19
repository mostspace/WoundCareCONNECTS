import React from 'react'
import { indicationCare } from 'src/constants'
import styles from 'src/style'
import TextCard from 'src/components/text-card'

const IndicationDrivenCare = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center md:gap-16'>
          <h2 className={`${styles.heading2} text-black text-center`}><span className='text-gradient'>Indication-Driven Care</span></h2>
        </div>
        <div className='w-full md:mt-6'>
          <p className={`${styles.paragraph} text-left w-full text-black`}>
            Wound Care Connects offer a series of pre-configured pouches containing wound care components tailored to specific indications for surgically created wounds. These sealed pouches allow healthcare providers to prescribe patients with precise combinations of primary and secondary dressings needed for daily changes. Organized into three primary categories, this approach streamlines care and product selection to enhance wound care management. Packages are conveniently delivered directly to the patient’s permanent address in quantities predetermined by the healthcare provider.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer relative z-[1]'>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {indicationCare.map((card) => (
                <TextCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>    
      <div className='w-full md:mt-6'>
          <p className={`${styles.paragraph} text-left w-full text-black`}>
            These products are tailored to address specific wound types, ensuring optimal healing outcomes for patients.
          </p>  
        </div>  
    </section>
  )
}

export default IndicationDrivenCare
