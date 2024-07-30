import { Helmet } from 'react-helmet-async';
// Sections
import PatientDetailsView from 'src/sections/agency/patient-details';

const PatientDetails = () => {
    return (
        <>
            <Helmet>
                <title>Patient Details</title>
            </Helmet>

            <PatientDetailsView />
        </>
    );
}

export default PatientDetails;