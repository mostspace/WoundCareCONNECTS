import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, FormControl, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import WhiteTextField from 'src/components/white-textfield';
import DefaultButton from 'src/components/button/default-button';
import { base_url } from 'src/constants';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setError('Invalid token.');
    }
  }, [location.search]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('Token is missing.');
      return;
    }
    try {
      const response = await axios.post(`${base_url}/api/auth/reset-password`, { token, password });
      setMessage(response.data.message);
      setError('');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setMessage('');
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className='flex flex-col w-full max-w-[520px] gap-[48px] px-[15px] py-[48px] sm:px-[48px] sm:py-[48px] rounded-[18px] shadow-custom backdrop-blur-lg z-10 box-decoration-slice'>
      <div className="flex flex-col gap-[16px] justify-center items-center">
        <Typography variant='h4' className='text-white'>Reset Password</Typography>
        <Typography variant='body1' className='text-white text-center'>Please enter your new password.</Typography>
      </div>
      <div className='w-full flex flex-col gap-[24px]'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[24px]'>
          <FormControl variant='outlined'>
            <WhiteTextField
              type={showPassword ? 'text' : 'password'}
              name='password'
              onChange={handleChange}
              value={password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label='New Password'
              required
            />
          </FormControl>
          <DefaultButton value='Reset Password' type="submit" />
          {message && <div className="text-green-500 mt-2">{message}</div>}
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>  
    </div>
  );
};

export default ResetPassword;
