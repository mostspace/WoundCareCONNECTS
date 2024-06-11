import { Helmet } from "react-helmet-async";

// Sections
import { ContactView } from 'src/sections/contact/view';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <ContactView />
    </>
  )
}