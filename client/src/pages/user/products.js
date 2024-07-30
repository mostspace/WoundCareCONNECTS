import { Helmet } from "react-helmet-async";

// Sections
import { ProductsView } from 'src/sections/user/products/view';

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <ProductsView />
    </>
  )
}