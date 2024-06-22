import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import styles from 'src/style'

const ContactForm = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
        <div className='flex flex-col gap-[48px] p-[24px] sm:p-[80px] border border-[#00A4F4] rounded-[28px]'>
            <div className='flex justify-center items-center'>
                <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center`}> <span className='text-gradient'>Contact Us</span></h2>
            </div>
            <p className='text-[20px] font-manrope sm:leading-[40px]'>Have a question or are you ready to sign up? Please send us an email. We’re always here when you need us. We are your friendly, neighborhood internet provider ready for you anytime you need us.</p>
            <div className='flex flex-col gap-[30px]'>
                <div className='sm:flex justify-between gap-[25px]'>
                    <FormControl variant="outlined" className='w-full !mb-[25px] sm:!mb-0'>
                        <TextField id="" label="Name" variant="outlined" className='wc-input rounded-full' name="name" type="text" />
                    </FormControl>
                    <FormControl variant="outlined" className='w-full'>
                        <TextField id="" label="Email" variant="outlined" className='wc-input' name="email" type="email" />
                    </FormControl>
                </div>
                <FormControl variant="outlined" className='w-full'>
                    <TextField id="" label="Phone" variant="outlined" className='wc-input' name="phone" type="text" />
                </FormControl>
                <TextareaAutosize maxRows="10" minRows='5' className="border border-[#00A4F4] rounded-[4px] wc-input p-[16px] text-[16px]" placeholder="Message" />
            </div>
            <Button 
            sx={{
                fontFamily: 'manrope',
                fontSize: '18px',
                textTransform: 'none',
                color: 'white',
                backgroundColor: '#00A4F4',
                padding: '12px 40px',
                '&:hover': {
                    backgroundColor: '#00A4F4',
                }
            }}
            >
                Submit
            </Button>
        </div>   
    </section>
  )
}

export default ContactForm;
