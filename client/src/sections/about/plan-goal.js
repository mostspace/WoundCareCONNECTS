import React from 'react'
import { planGoalImg } from 'src/assets'
import { planGoal } from 'src/constants'
import styles from 'src/style'

const PlanGoal = () => {
  return (
    <section className="flex flex-col gap-[40px] mb-10">
        <div className='flex justify-center items-center'>
          <h2 className={`text-[28px] sm:${styles.heading2} text-black text-center`}><span className='text-gradient'> Wound Care </span>Plan Goals</h2>
        </div>
        <div className='w-full'><p className='text-[20px] sm:text-[24px] w-full'>At Wound Care Connects we personalize every patient's care plan to align with their unique goals and needs. Here are some common wound care plan goals</p></div>
        <div className='sm:flex justify-between gap-20 items-center'>
            <div className='w-full flex flex-col gap-[20px]'>
                <div className='flex justify-start items-center pb-10 pl-7'>
                    <ul className='list-disc text-[18px] ss:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[40px] wc-ul'>
                        {planGoal.map((item) => (
                            <li key={item.id}>{item.content}</li>
                        ))}
                    </ul>
                </div>  
            </div>
            <div className='w-full'>
                <img src={planGoalImg} alt='Get to know us' className='w-full h-full rounded-[16px]' />
            </div>
        </div>
        <div><p className='text-[20px]'>Our dedicated team works tirelessly to ensure that your wound care plan is tailored to your specific objectives, fostering a swift and successful recovery journey.</p></div>
    </section>
  )
}

export default PlanGoal
