import { Helmet } from "react-helmet-async";

// Sections
import { ServicesView } from 'src/sections/services/view';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>

      <ServicesView />
    </>
  )
}