import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'src/components/button';
import { logoWhite } from 'src/assets';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3003/register", formData)
            .then((result) => {
                console.log(result);
                navigate("/signin");
            })
            .catch((err) => console.log(err));
    };

    return (
        <section id='signup' className={`ss:flex font-manrope ss:h-[100vh]`}>
        <div className="ss:w-[40%] bg-primary flex flex-col justify-center items-center gap-10 px-10 py-10">
            <Link to="/">
            <img
                src={logoWhite}
                alt='logo'
                className='w-full'
            />
            </Link>
            <p className='text-[40px] ss:text-[60px] text-white'>Sign Up</p>
        </div>
        <div className='ss:w-[60%] flex flex-col justify-center items-center py-10 lg:mt-10 px-10'>
            <div className='flex-col w-full ss:w-[70%]'>
                <div className='py-5 text-right'>
                    <Link to="/signin" className='text-primary'><ArrowForwardIcon /> Already have account?</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-rows-w gap-10'>
                        <TextField id="name" label="Name" name="name" variant="outlined" className='wc-input' value={formData.name} onChange={handleChange} />
                        <TextField id="email" label="Email" name="email" type="email" variant="outlined" className='wc-input' value={formData.email} onChange={handleChange} />
                        <FormControl variant="outlined" className='wc-input'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className='grid ss:flex justify-between items-center my-10'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember" />
                        <Link className='text-primary'>Forgot password?</Link>
                    </div>
                    <button type="submit" className='bg-primary text-white rounded-full py-4 w-full text-[18px]'>CONTINUE</button>
                    {/* <Button title="CONTINUE" type={'submit'} styles={'w-full text-center rounded-full'} /> */}
                </form>
                <div className='text-[16px] text-center mt-7'>
                    By signing up you agree to our <Link className='text-primary'>Terms of Service</Link> and <Link className='text-primary'>Privacy Policy</Link>
                </div>
            </div>        
        </div>  
        </section>
    )
}

export default Signup
