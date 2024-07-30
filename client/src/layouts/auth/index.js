import React from 'react'
import { Link, } from 'react-router-dom';

// Assets
import { logoWhite, } from 'src/assets'

// @mui
import {
  Typography, 
} from '@mui/material';


const Signin = ({children}) => {

  return (
    <section id='signin' className="flex flex-col gap-[72px] justify-center items-center bg-white min-h-[100vh] px-[15px] py-[32px] sm:p-[48px] backdrop-blur-lg relative">
      <Link to="/" className='flex sm:justify-center'><img src={logoWhite} alt='logo' className='w-[60%]' /></Link>
      {children}
    </section>
  )
}

export default Signin;