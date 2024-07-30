import React, { useState } from 'react';
import { Button, CircularProgress, FormControl, TextField } from '@mui/material';
import PhoneNumberMaskInput from 'src/components/phonenumber-mask-input';

import { SnackbarProvider, useSnackbar } from 'notistack';

import { base_url } from 'src/constants';

const ContactForm = () => {

    const { enqueueSnackbar } = useSnackbar(); // Destructure enqueueSnackbar from useSnackbar
    const [loading, setLoading] = useState(false); // Add loading state

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        try {
            const response = await fetch(`${base_url}/api/user/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                enqueueSnackbar('Message sent successfully!', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                enqueueSnackbar('Failed to send message. Please try again.', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            enqueueSnackbar('Failed to send message. Please try again.', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
        } finally {
            setLoading(false); // Set loading to false after submission is completed
        }
    };    

    return (
        <section className="flex-col relative">
            <div className='flex flex-col gap-[24px] sm:gap-[48px] p-[24px] sm:p-[48px] border border-[#00A4F4] rounded-[28px]'>
                <h2 className={`text-[32px] sm:text-[40px] font-manrope font-semibold text-black text-center`}> <span className='text-gradient'>Contact Us</span></h2>
                <div className='flex flex-col sm:flex-row items-center gap-[24px]'>
                <div className='w-full flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[16px]'>
                    <p className='text-[16px] sm:text-[20px] font-manrope sm:leading-[40px]'>Have a Question or Inquiry? Connect with Us Below!</p>
                    <p className='text-[16px] sm:text-[20px] font-manrope sm:leading-[40px]'>We're always here when you need us. As your friendly, neighborhood Home Health provider, we're dedicated to offering you the care and support you deserve. Whether you have a question, need assistance, or want to learn more about our services, we're ready to help anytime. Reach out to us today!</p>
                    <p className='text-[16px] sm:text-[20px] font-manrope sm:leading-[40px]'>For further inquiries, please don't hesitate to reach out at <br /><span className='text-primary'>+1 (847) 875-4000</span></p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-[14px] sm:gap-[30px]'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[14px] sm:gap-[30px]'>
                        <div className='flex flex-col sm:flex-row justify-between gap-[14px] sm:gap-[30px]'>
                            <FormControl variant="outlined" className='w-full'>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                className='wc-input rounded-full'
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            </FormControl>
                            <FormControl variant="outlined" className='w-full'>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                className='wc-input'
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            </FormControl>
                        </div>
                        <FormControl variant="outlined" className='w-full'>
                            <TextField
                            className='wc-input'
                            InputProps={{
                                inputComponent: PhoneNumberMaskInput,
                            }}
                            name="phone"
                            variant='outlined'
                            fullWidth
                            label="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </FormControl>
                        <TextField
                            id="message"
                            label="Message"
                            variant="outlined"
                            className='wc-input'
                            name="message"
                            type="text"
                            multiline
                            rows='3'
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {/* <DefaultButton value='Submit' type="submit" /> */}
                        <Button type="submit" disabled={loading}
                            sx={{
                                width: 'auto',
                                height: '44px',
                                fontFamily: 'Manrope',
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ffffff',
                                borderRadius: '8px',
                                backgroundColor: '#00A4F4',
                                textTransform: 'unset',
                                '&:hover': {
                                    backgroundColor: '#00A4F4',
                                }
                            }}
                        >
                            {loading ? <CircularProgress size={20} className='ml-3' sx={{color:'white'}} /> : 'Submit'} 
                        </Button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
