import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Grid, Typography, FormControl, IconButton, CircularProgress, Button } from '@mui/material';

// Components
import FileThumbnail from 'src/components/file-thumbnail/file-thumbnail';
import ExportToExcel from 'src/components/export-excel';

// Icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { base_url } from 'src/constants';
import DefaultButton from 'src/components/button/default-button';

const PatientDetails = () => {
    const { id } = useParams(); // Get the id from the URL
    const [formValues, setFormValues] = useState({
        name: '',
        agency_address: '',
        agency_phone: '',
        agency_email: '',
        h_agency_name: '',
        h_agency_phone: '',
        h_agency_email: '',
        h_agency_position: '',
        h_agency_referred: '',
        patient_address: '',
        patient_phone: '',
        patient_birth: '',
        emergency_name: '',
        emergency_address: '',
        emergency_phone: '',
        emergency_relationship: '',
        primary_insurance: '',
        primary_member: '',
        secondary_insurance: '',
        secondary_member: '',
        wound_information: '',
        wound_size: '',
    });

    const [attachments, setAttachments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const response = await axios.get(`${base_url}/api/agency/submission-detail/${id}`);
                setFormValues(response.data);
                if (response.data.attachments) {
                    setAttachments(response.data.attachments);
                }
            } catch (error) {
                console.error('Error fetching patient details:', error);
                setError('Failed to fetch patient details');
            } finally {
                setLoading(false);
            }
        };

        fetchPatientDetails();
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    // Export excel file
    const handleExportClick = () => {
        // Collect data to export
        const data = [
            {
                "Agency Address": formValues.agency_address || '',
                "Agency Phone Number": formValues.agency_phone || '',
                "Agency Email": formValues.agency_email || '',
                "Home Health Agency Contact Name": formValues.h_agency_name || '',
                "Home Health Agency Contact Phone": formValues.h_agency_phone || '',
                "Home Health Agency Contact Email": formValues.h_agency_email || '',
                "Home Health Agency Position": formValues.h_agency_position || '',
                "Referred By": formValues.h_agency_referred || '',
                "Patient Name": formValues.patient_name || '',
                "Patient Address": formValues.patient_address || '',
                "Patient Phone Number": formValues.patient_phone || '',
                "Patient Birthday": formValues.patient_birth || '',
                "Emergency Contact Name": formValues.emergency_name || '',
                "Emergency Contact Address": formValues.emergency_address || '',
                "Emergency Contact Phone": formValues.emergency_phone || '',
                "Emergency Contact Relationship": formValues.emergency_relationship || '',
                "Primary Insurance": formValues.primary_insurance || '',
                "Primary Insurance Member Number": formValues.primary_member || '',
                "Secondary Insurance": formValues.secondary_insurance || '',
                "Secondary Insurance Member Number": formValues.secondary_member || '',
                "Wound Information": formValues.wound_information || '',
                "Wound Size": formValues.wound_size || '',
            }
        ];
        
        // Call the function to export data to Excel with patient's name for filename
        ExportToExcel(data, formValues.patient_name || 'Patient');
    };

    return (
        <div className="w-full flex flex-col gap-[48px]">
            <div className="flex flex sm:justify-between items-center gap-[14px]">
                <Link to="/agency" className="text-[26px]">
                    <IconButton><KeyboardBackspaceIcon className="text-[30px] text-black mb-[2px]" /></IconButton>
                </Link>
                <Typography className="text-center text-primary !text-[22px] sm:!text-[32px]">Patient Information</Typography>
                <DefaultButton value="Export CSV" onClick={handleExportClick} />
            </div>
            <Grid container spacing={3}>
                <Grid item md={4.5} sm={12} xs={12}>
                    <div className="w-full flex flex-col gap-[48px] shadow-card rounded-[28px] p-[24px] sm:p-[48px]">
                        <div className="w-full flex flex-col gap-[24px]">
                            <Typography variant="h6" className="capitalize text-primary">name of agency</Typography>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Address" variant="outlined" name="agency_address" type="text" InputProps={{ readOnly: true }} value={formValues.agency_address} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Phone Number" variant="outlined" name="agency_phone" type="text" InputProps={{ readOnly: true }} value={formValues.agency_phone} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Email" variant="outlined" name="agency_email" type="email" InputProps={{ readOnly: true }} value={formValues.agency_email} />
                            </FormControl>
                        </div>
                        <div className="w-full flex flex-col gap-[24px]">
                            <Typography variant="h6" className="capitalize text-primary">Home Health Agency contact</Typography>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Name" variant="outlined" name="h_agency_name" type="text" InputProps={{ readOnly: true }} value={formValues.h_agency_name} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField name="h_agency_phone" variant="outlined" fullWidth label="Phone Number" InputProps={{ readOnly: true }} value={formValues.h_agency_phone} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Email" variant="outlined" name="h_agency_email" type="email" InputProps={{ readOnly: true }} value={formValues.h_agency_email} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Position" variant="outlined" name="h_agency_position" type="text" InputProps={{ readOnly: true }} value={formValues.h_agency_position} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Referred By" variant="outlined" name="h_agency_referred" type="text" InputProps={{ readOnly: true }} value={formValues.h_agency_referred} />
                            </FormControl>
                        </div>
                    </div>
                </Grid>
                <Grid item md={7.5} sm={12} xs={12}>
                    <div className="w-full flex flex-col gap-[48px] shadow-card rounded-[28px] p-[24px] sm:p-[48px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-[24px]">
                                <div className="w-full flex flex-col gap-[14px]">
                                    <Typography variant="h6" className="capitalize text-primary">patient information</Typography>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="First name and Last name" variant="outlined" name="patient_name" type="text" InputProps={{ readOnly: true }} value={formValues.patient_name} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Address" variant="outlined" name="patient_address" type="text" InputProps={{ readOnly: true }} value={formValues.patient_address} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Phone Number" variant="outlined" name="patient_phone" type="text" InputProps={{ readOnly: true }} value={formValues.patient_phone} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Birthday" variant="outlined" name="patient_birth" type="text" InputProps={{ readOnly: true }} value={formValues.patient_birth} />
                                    </FormControl>
                                </div>
                                <div className="w-full flex flex-col gap-[14px]">
                                    <Typography variant="h6" className="capitalize text-primary">emergency contact</Typography>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Name" variant="outlined" className="rounded-full" name="emergency_name" type="text" InputProps={{ readOnly: true }} value={formValues.emergency_name} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Address" variant="outlined" name="emergency_address" type="text" InputProps={{ readOnly: true }} value={formValues.emergency_address} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField name="emergency_phone" variant="outlined" value={formValues.emergency_phone} fullWidth label="Phone Number" InputProps={{ readOnly: true }} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Relationship to patient" variant="outlined" InputProps={{ readOnly: true }} name="emergency_relationship" type="text" value={formValues.emergency_relationship} />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <Typography variant="h6" className="capitalize text-primary">insurance information</Typography>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-[24px]">
                                <div className="w-full flex flex-col gap-[14px]">
                                    <Typography variant="body2" className="text-gray-500">Primary Insurance</Typography>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Type of Insurance" variant="outlined" InputProps={{ readOnly: true }} name="primary_insurance" type="text" value={formValues.primary_insurance} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Member number" variant="outlined" InputProps={{ readOnly: true }} name="primary_member" type="text" value={formValues.primary_member} />
                                    </FormControl>
                                </div>
                                <div className="w-full flex flex-col gap-[14px]">
                                    <Typography variant="body2" className="text-gray-500">Secondary Insurance</Typography>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Type of Insurance" variant="outlined" InputProps={{ readOnly: true }} name="secondary_insurance" type="text" value={formValues.secondary_insurance} />
                                    </FormControl>
                                    <FormControl variant="outlined" className="w-full">
                                        <TextField label="Member number" variant="outlined" InputProps={{ readOnly: true }} name="secondary_member" type="text" value={formValues.secondary_member} />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <Typography variant="h6" className="capitalize text-primary">wound information</Typography>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Wound information" variant="outlined" InputProps={{ readOnly: true }} name="wound_information" type="text" multiline rows="5" value={formValues.wound_information} />
                            </FormControl>
                            <FormControl variant="outlined" className="w-full">
                                <TextField label="Size of wound(s)" variant="outlined" InputProps={{ readOnly: true }} name="wound_size" type="text" value={formValues.wound_size} />
                            </FormControl>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <Typography variant="h6" className="capitalize text-primary">Attachments</Typography>
                            <div variant="outlined" className="w-full flex gap-[14px]">
                                {attachments.length > 0 ? (
                                    attachments.map((attachment, index) => (
                                        <div key={attachment._id} variant="outlined" className="flex">
                                            <Link to={`/uploads/${attachment.filename}`} target='_blank'>
                                                <FileThumbnail
                                                    tooltip
                                                    file={attachment.filename}
                                                    imgSx={{ position: 'absolute' }}
                                                />
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <Typography>No attachments available</Typography>
                                )}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default PatientDetails;
