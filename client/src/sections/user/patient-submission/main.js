import React, { useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, Typography, FormControl, Button, CircularProgress } from '@mui/material';
import axios from "axios";
import { AuthContext } from 'src/auth/auth-provider';

import { SnackbarProvider, useSnackbar } from 'notistack'; // Import SnackbarProvider and useSnackbar

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Components
import PhoneNumberMaskInput from 'src/components/phonenumber-mask-input';
import FileUpload from 'src/components/file-upload';
import { base_url } from 'src/constants';

const Main = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar(); // Destructure enqueueSnackbar from useSnackbar

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleDropMultiFile = useCallback(
        (acceptedFiles) => {
            setFiles([
                ...files,
                ...acceptedFiles.map((newFile) =>
                    Object.assign(newFile, {
                        preview: URL.createObjectURL(newFile),
                    })
                ),
            ]);
        },
        [files]
    );

    const handleRemoveFile = (inputFile) => {
        const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
        setFiles(filesFiltered);
    };

    const handleRemoveAllFiles = () => {
        setFiles([]);
    };

    const [formData, setFormData] = useState({
        agency_address: "",
        agency_phone: "",
        agency_email: "",
        h_agency_name: "",
        h_agency_phone: "",
        h_agency_email: "",
        h_agency_position: "Administrator",
        h_agency_referred: "",
        patient_name: "",
        patient_address: "",
        patient_phone: "",
        patient_birth: "",
        emergency_name: "",
        emergency_address: "",
        emergency_phone: "",
        emergency_relationship: "",
        primary_insurance: "",
        primary_member: "",
        secondary_insurance: "",
        secondary_member: "",
        wound_information: "",
        wound_size: "",
        attachments: [],
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        setFormData({
            ...formData,
            patient_birth: formattedDate,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            enqueueSnackbar('Please sign in before submit form.', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } }); // Show error message at top-right
            return; // Stop further execution if not logged in
        }

        setLoading(true); // Set loading to true before starting the submission

        const formDataToSend = new FormData();

        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        files.forEach((file) => {
            formDataToSend.append('attachments', file);
        });

        axios.post(base_url + "/api/user/submission", formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((result) => {
            console.log(result);
            enqueueSnackbar('Form submitted successfully!', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } }); // Show success message at top-right
            setTimeout(() => {
                window.location.reload();
            }, 1000); 
        })
        .catch((err) => {
            console.error(err);
            enqueueSnackbar('Failed to submit form. Please try again.', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } }); // Show error message at top-right
        })
        .finally(() => {
            setLoading(false); // Set loading to false after submission is completed
        });
    };

    return (
        <section className="flex-col relative">
            <SnackbarProvider maxSnack={3}>
                <div className='w-full flex flex-col gap-[48px]'>
                    <Typography variant='h4' className='text-center text-gradient'>Patient Submission</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item md={4.5} sm={12} xs={12}>
                                <div className='w-full flex flex-col gap-[48px] shadow-card rounded-[28px] p-[24px] sm:p-[48px]'>
                                    <div className='w-full flex flex-col gap-[24px]'>
                                        <Typography variant='h6' className='capitalize text-primary'>name of agency</Typography>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Address" variant="outlined" className='' name="agency_address" type="text" onChange={handleFormChange} />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField
                                                InputProps={{
                                                    inputComponent: PhoneNumberMaskInput,
                                                }}
                                                name="agency_phone"
                                                variant='outlined'
                                                fullWidth
                                                label="Phone Number"
                                                onChange={handleFormChange}
                                            />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Email" variant="outlined" className='' name="agency_email" type="email" onChange={handleFormChange} />
                                        </FormControl>
                                    </div>
                                    <div className='w-full flex flex-col gap-[24px]'>
                                        <Typography variant='h6' className='capitalize text-primary'>Home Health Agency contact</Typography>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Name" variant="outlined" className='' name="h_agency_name" type="text" onChange={handleFormChange} />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField
                                                InputProps={{
                                                    inputComponent: PhoneNumberMaskInput,
                                                }}
                                                name="h_agency_phone"
                                                variant='outlined'
                                                fullWidth
                                                label="Phone Number"
                                                onChange={handleFormChange}
                                            />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Email" variant="outlined" className='' name="h_agency_email" type="email" onChange={handleFormChange} />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Position" variant="outlined" className='' name="h_agency_position" value={formData.h_agency_position} type="text" onChange={handleFormChange} />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Referred By" variant="outlined" className='' name="h_agency_referred" type="text" onChange={handleFormChange} />
                                        </FormControl>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={7.5} sm={12} xs={12}>
                                <div className='w-full flex flex-col gap-[48px] shadow-card rounded-[28px] p-[24px] sm:p-[48px]'>
                                    <div className='flex flex-col gap-[24px]'>
                                        <div className='flex flex-col sm:flex-row items-center justify-between gap-[24px]'>
                                            <div className='w-full flex flex-col gap-[14px]'>
                                                <Typography variant='h6' className='capitalize text-primary'>patient information</Typography>
                                                <div className='w-full flex flex-col gap-[24px]'>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Name" variant="outlined" className=' rounded-full' name="patient_name" type="text" onChange={handleFormChange} required />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Address" variant="outlined" className='' name="patient_address" type="text" onChange={handleFormChange} required />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField
                                                            InputProps={{
                                                                inputComponent: PhoneNumberMaskInput,
                                                            }}
                                                            name="patient_phone"
                                                            variant='outlined'
                                                            required
                                                            fullWidth
                                                            onChange={handleFormChange}
                                                            label="Phone Number"
                                                        />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                label="Date of Birth*"
                                                                name='patient_birth'
                                                                required
                                                                onChange={handleDateChange}
                                                                renderInput={(params) => <TextField {...params} />}
                                                            />
                                                        </LocalizationProvider>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-[14px]'>
                                                <Typography variant='h6' className='capitalize text-primary'>emergency contact</Typography>
                                                <div className='w-full flex flex-col gap-[24px]'>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Name" variant="outlined" className=' rounded-full' name="emergency_name" type="text" onChange={handleFormChange} required />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Address" variant="outlined" className='' name="emergency_address" type="text" onChange={handleFormChange} required />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField
                                                            InputProps={{
                                                                inputComponent: PhoneNumberMaskInput,
                                                            }}
                                                            name="emergency_phone"
                                                            variant='outlined'
                                                            required
                                                            fullWidth
                                                            label="Phone Number"
                                                            onChange={handleFormChange}
                                                        />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Relationship to patient" variant="outlined" className='' onChange={handleFormChange} name="emergency_relationship" type="text" required />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[24px]'>
                                        <Typography variant='h6' className='capitalize text-primary'>insurance information</Typography>
                                        <div className='flex flex-col sm:flex-row items-center justify-between gap-[24px]'>
                                            <div className='w-full flex flex-col gap-[14px]'>
                                                <Typography variant='paragraph' className='text-[14px] text-gray-500'>Primary Insurance</Typography>
                                                <div className='w-full flex flex-col gap-[24px]'>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Type of Insurance" variant="outlined" onChange={handleFormChange} name="primary_insurance" type="text" required />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Member number" variant="outlined" onChange={handleFormChange} name="primary_member" type="text" required />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-[14px]'>
                                                <Typography variant='paragraph' className='text-[14px] text-gray-500'>Secondary Insurance</Typography>
                                                <div className='w-full flex flex-col gap-[24px]'>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Type of Insurance" variant="outlined" onChange={handleFormChange} name="secondary_insurance" type="text" />
                                                    </FormControl>
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <TextField id="" label="Member number" variant="outlined" onChange={handleFormChange} name="secondary_member" type="text" />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[24px]'>
                                        <Typography variant='h6' className='capitalize text-primary'>wound information</Typography>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Wound information" variant="outlined" onChange={handleFormChange} name="wound_information" type="text" multiline rows='5' />
                                        </FormControl>
                                        <FormControl variant="outlined" className='w-full'>
                                            <TextField id="" label="Size of wound(s)" variant="outlined" onChange={handleFormChange} name="wound_size" type="text" />
                                        </FormControl>
                                    </div>
                                    <div className='flex flex-col gap-[24px]'>
                                        <Typography variant='h6' className='capitalize text-primary'>Attachments </Typography>
                                        <FormControl variant="outlined" className='w-full'>
                                            <FileUpload
                                                multiple
                                                thumbnail={true}
                                                files={files}
                                                name="attachments"
                                                title={"Please include the patient's facesheet, notes, and pictures of the wounds."}
                                                onDrop={handleDropMultiFile}
                                                onRemove={handleRemoveFile}
                                                onRemoveAll={handleRemoveAllFiles}
                                            />
                                        </FormControl>
                                    </div>
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
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </SnackbarProvider>
        </section>
    );
}

export default Main;
