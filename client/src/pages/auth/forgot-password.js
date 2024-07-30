import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from 'src/constants';
import { Link } from 'react-router-dom';
import { FormControl, Typography, Button, IconButton, InputAdornment } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WhiteTextField from 'src/components/white-textfield';
import DefaultButton from 'src/components/button/default-button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/api/auth/forgot-password`, { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setMessage('');
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col w-full max-w-[520px] gap-[48px] px-[15px] py-[48px] sm:px-[48px] sm:py-[48px] rounded-[18px] shadow-custom backdrop-blur-lg z-10 box-decoration-slice'>
      <div className="flex flex-col gap-[16px] justify-center items-center">
        <Typography variant='h4' className='text-white'>Forgot Password</Typography>
        <Typography variant='body1' className='text-white text-center'>Please enter the email address associated with your account and we'll email you a link to reset your password.</Typography>
      </div>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[24px]'>
        <WhiteTextField
          label="Email address"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <DefaultButton value={loading ? 'Sending...' : 'Send Request'} type="submit" disabled={loading} />
        {message && <div className="text-white text-center mt-2">{message}</div>}
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <Link to='/login' className='text-center text-white'>
          <ArrowBackIosNewIcon sx={{fontSize: '16px'}} className='pb-[2px] mr-[5px]' />Return to sign in
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
