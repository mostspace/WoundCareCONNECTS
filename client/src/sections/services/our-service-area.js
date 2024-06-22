import React from 'react'
import { serviceMap } from 'src/assets'
import styles from 'src/style'

const OurServiceArea = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex'>
            <img src={serviceMap} alt='Services' className='w-full' />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center`}><span className='text-gradient'>Our Service Area</span> </h2>
        </div>
        <div className='w-full my-6'>
          <p className={`${styles.paragraph} text-center w-full text-black`}>
            We have been proudly serving the broader Chicago area with exceptional home health care services. As a Medicare-certified home health agency, we hold licensure from the State of Illinois Department of Public Health. Our referral process operates seamlessly, ensuring personalized care tailored to accommodate any schedule. For further inquiries, please don't hesitate to reach out at (----)-----------------
          </p>  
        </div>
      </div>    
    </section>
  )
}

export default OurServiceArea
