import { Helmet } from "react-helmet-async";

// Sections
import { TestimonialsView } from 'src/sections/testimonials/view';

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
      </Helmet>

      <TestimonialsView />
    </>
  )
}