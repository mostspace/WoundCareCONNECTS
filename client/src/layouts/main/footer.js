import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import styles from 'src/style'
import { socialMedia } from 'src/constants'
import { AuthContext } from 'src/auth/auth-provider';

// Asset
import { logo } from 'src/assets'

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} wc-bg-light-primary`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} flex-col pt-5 ss:pt-16`}>
          <div className={`flex justify-between flex-col ss:flex-row mb-8 w-full gap-[24px]`}>
            <div className='flex flex-col justify-start gap-[20px]'>
              <Link to="/">
                <img
                  src={logo}
                  alt='logo'
                  className='w-[266px] object-contain'
                />
              </Link>
              <p className={`font-manrope text-[16px] mt-4 max-w-[310px] text-gray-600`}>
                Experience personalized medical care from the comfort of your home.    
              </p>
            </div>
            <div className='w-full flex flex-col ss:flex-row justify-end items-start sm:gap-[40px]'>
              <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-manrope font-medium text-[18px] leading-[27px] text-primary'>Support</h4>
                <ul className='list-none mt-4 flex flex-col gap-[12px]'>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to='/login'>Getting Started</Link>
                  </li>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to='/faqs'>FAQs</Link>
                  </li>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to='/contact'>Report an issue</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-manrope font-medium text-[18px] leading-[27px] text-primary'>Services</h4>
                <ul className='list-none mt-4 flex flex-col gap-[12px]'>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to='/register'>Booking appointments</Link>
                  </li>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to={isLoggedIn ? '/patient-submission' : '/login'}>Patient Submission</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-manrope font-medium text-[18px] leading-[27px] text-primary'>Contact Us</h4>
                <ul className='list-none mt-4 flex flex-col gap-[12px]'>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to="tel:8478754000"><PhoneIcon className='text-[14px] mr-2' />+1 (847) 875-4000</Link>
                  </li>
                  <li className='font-manrope font-normal text-[16px] leading-[24px] text-gray-700 hover:text-primary cursor-pointer'>
                    <Link to='mailto:info@woundcareconnects.com'><EmailIcon className='text-[14px] mr-2' />info@woundcareconnects.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#B6E6FF]'>
            <div className='flex flex-row md:mt-0 sm:mt-6'>
              {socialMedia.map((social, index) => (
                <Link to={social.path} key={index} target='blank'>
                  <img
                    src={social.icon}
                    alt={social.id}
                    className={`w-[32px] h-[32px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                  />
                </Link>
              ))}
            </div>
            <p className='font-manrope font-normal text-center text-[16px] leading-[27px] text-gray-500 mt-5 ss:mt-0'>
              WoundCare CONNECTS 2024 © All Rights Reserved
            </p>    
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer