import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/Button'
import { logoWhite } from 'src/assets'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Sign In
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3003/login", formData)
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         navigate("/home");
  //       } else {
  //         // Show an error message to the user indicating invalid credentials
  //         setError("Invalid email or password. Please try again.");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // Show an error message to the user indicating a server error
  //       setError("An error occurred. Please try again later.");
  //     });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("123");
  //   try {
  //     const response = await axios.post("http://localhost:3003/login", formData);
  //     console.log("456");
  //     if (response.data === "Success") {
  //       navigate("/home");
  //     } else {
  //       setError("Invalid email or password. Please try again.");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError("An error occurred. Please try again later.");
  //   }
  // };  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/login", formData)
      .then((result) => {
          console.log(result);
          navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id='signin' className={`ss:flex font-manrope ss:h-[100vh]`}>
      <div className="ss:w-[40%] bg-primary flex flex-col justify-center items-center gap-10 px-10 py-10">
        <Link to="/">
          <img
              src={logoWhite}
              alt='logo'
              className='w-full'
          />
        </Link>
        <p className='text-[40px] ss:text-[60px] text-white'>Sign In</p>
      </div>
      <div className='ss:w-[60%] flex flex-col justify-center items-center py-10 lg:mt-10 px-10'>
        <div className='flex-col w-full ss:w-[70%]'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-rows-w gap-10'>
                <TextField id="email" label="Email" variant="outlined" className='wc-input' name="email" type="email" value={formData.email} onChange={handleChange} />
                <FormControl variant="outlined" className='wc-input'>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="pwd"
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
            {/* <Button title="CONTINUE" styles={'w-full text-center rounded-full'} /> */}
            <div className='text-[16px] text-center mt-7'>
                Don't have an account? <Link to="/signup" className='text-primary'>Sign up</Link>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        </div>        
      </div>  
    </section>
  )
}

export default Signin;
