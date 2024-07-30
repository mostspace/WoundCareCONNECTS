import React from 'react'
import { woundTypes } from 'src/constants'
import styles from 'src/style'
import WoundTypeCard from 'src/components/wound-type-card'

const WoundTypes = () => {
  return (
    <section id='clients' className={`flex flex-col gap-[48px] relative`}>
      <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center`}><span className='text-gradient'>Wound Types</span></h2>
      <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer'>
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
