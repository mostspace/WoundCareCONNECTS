import { Helmet } from "react-helmet-async";

// Sections
import { AboutView } from 'src/sections/about/view';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>

      <AboutView />
    </>
  )
}