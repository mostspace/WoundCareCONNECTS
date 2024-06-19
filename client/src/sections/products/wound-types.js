import React from 'react'
import { woundTypes } from 'src/constants'
import styles from 'src/style'
import WoundTypeCard from 'src/components/wound-type-card'

const WoundTypes = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center md:gap-16'>
          <h2 className={`${styles.heading2} text-black text-center`}><span className='text-gradient'>Wound Types</span></h2>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer relative z-[1]'>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-3 gap-8">
              {woundTypes.map((card) => (
                <WoundTypeCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default WoundTypes
