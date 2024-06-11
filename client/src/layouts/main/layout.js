import React from 'react'

// Routes
import { usePathname } from 'src/routes/hooks';

import Header from './header'
import Footer from './footer'

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

