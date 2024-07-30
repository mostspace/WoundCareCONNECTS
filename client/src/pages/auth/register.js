import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { base_url } from 'src/constants';
import axios from 'axios';
import {
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Components
import DefaultButton from 'src/components/button/default-button';
import WhiteTextField from 'src/components/white-textfield';

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Form state and error handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  // Password visibility toggling
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => event.preventDefault();

  // Validation functions
  const validateName = () => {
    if (!formData.name) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',
      }));
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    } else if (!emailRegex.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!formData.password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    } else if (formData.password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be exactly 6 characters long',
      }));
      return false;
    }
    return true;
  }; 
  
  const validateConfirmPassword = () => {
    if (!formData.confirm_password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirm_password: 'Confirm Password is required',
      }));
      return false;
    } else if (formData.password !== formData.confirm_password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirm_password: 'Passwords do not match',
      }));
      return false;
    }
    return true;
  };

  const validateForm = () => {
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();

    return isValidName && isValidEmail && isValidPassword && isValidConfirmPassword;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(base_url + '/api/auth/register', formData)
        .then((response) => {
          setMessage(response.data.message);
          setError('');
          console.log(response);
          navigate('/login');
        })
        .catch((err) => {
          console.error(err);
          setError(err.response.data.error || 'An error occurred');
        });
    }
  };
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear related error when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  return (
    <div className='flex flex-col w-full max-w-[520px] gap-[48px] px-[15px] py-[48px] sm:px-[48px] sm:py-[48px]  flex rounded-[18px] shadow-custom backdrop-blur-lg z-10 box-decoration-slice '>
      <div className='flex flex-col gap-[24px] justify-center items-center'>
        <Typography variant='h4' className='text-white'>
          Sign Up
        </Typography>
      </div>
      <div className='w-full'>
        <form onSubmit={handleSubmit}>
          <div className='pb-[14px] text-right'>
            <Link to='/login' className='text-white'>
              <ArrowForwardIcon /> Already have account?
            </Link>
          </div>
          <div className='flex flex-col gap-[48px]'>
            <div className='w-full flex flex-col gap-[24px]'>
              <WhiteTextField
                label='Name'
                name='name'
                type='name'
                value={formData.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
              <WhiteTextField
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <FormControl variant='outlined'>
                <WhiteTextField
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
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
                  label='Password'
                />
              </FormControl>
              <FormControl variant='outlined'>
                <WhiteTextField
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='confirm_password'
                  value={formData.confirm_password}
                  onChange={handleChange}
                  error={!!formErrors.confirm_password}
                  helperText={formErrors.confirm_password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label='toggle password visibility'
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge='end'
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label='Confirm Password'
                />
              </FormControl>
            </div>
            <DefaultButton value='Continue' type='submit' />
            {message && <div className="text-green-500 text-center mt-1">{message}</div>}
            {error && <div className="text-red-500 text-center mt-1">{error}</div>}
            <div className='text-[16px] text-start text-white'>
              By signing up you agree to our{' '}
              <Link className='text-white underline'>Terms of Service</Link> and{' '}
              <Link className='text-white underline'>Privacy Policy</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
