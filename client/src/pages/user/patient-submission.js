import { Helmet } from "react-helmet-async";

// Sections
import { PatientSubmissionView } from 'src/sections/user/patient-submission/view';

export default function PatientSubmission() {
  return (
    <>
      <Helmet>
        <title>Patient Submission</title>
      </Helmet>

      <PatientSubmissionView />
    </>
  )
}