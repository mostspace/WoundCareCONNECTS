import React from 'react'
import { woundCareProducts } from 'src/constants'
import { heart } from 'src/assets'
import styles from 'src/style'
import ProductCard from 'src/components/product-card'

const WoundCareProducts = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex justify-center items-center md:gap-16'>
          <h2 className={`${styles.heading2} text-black text-center`}><span className='text-gradient'> Wound Care</span> offers the following products </h2>
        </div>
        <div className='w-full md:mt-6'>
          <p className={`${styles.paragraph} text-left w-full text-black`}>
            At Wound Care Connects we provide an extensive selection of advanced wound care products tailored to support patients managing conditions that hinder the body's natural regenerative abilities. Our innovative products are used by providers to enhance the cellular restorative process, potentially aiding in effective wound healing.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full text-card-contrainer relative z-[1]'>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-4 gap-8">
              {woundCareProducts.map((card) => (
                <ProductCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>    
      <div className='w-full md:mt-6'>
          <p className={`${styles.paragraph} text-left w-full text-black`}>
            These therapies and materials collectively contribute to comprehensive wound care management, catering to diverse patient needs and promoting effective healing outcomes.
          </p>  
        </div>  
    </section>
  )
}

export default WoundCareProducts
