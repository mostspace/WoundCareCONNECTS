import React from 'react'

import Header from './header'
import Footer from './footer'

import FloatingActionButtons from 'src/components/floating-action-button';

export default function MainLayout({ children }) {

  return (
    <div className='relative'>
      <Header />
      {children}
      <FloatingActionButtons />
      <Footer />
    </div>
  )
}