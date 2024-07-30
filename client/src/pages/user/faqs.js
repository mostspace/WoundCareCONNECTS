import { Helmet } from "react-helmet-async";

// Sections
import { FaqsView } from 'src/sections/user/faqs/view';

export default function FaqsPage() {
  return (
    <>
      <Helmet>
        <title>Faqs</title>
      </Helmet>

      <FaqsView />
    </>
  )
}