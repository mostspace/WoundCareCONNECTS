import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

import FloatingActionButtons from 'src/components/floating-action-button'

export default function CustomAccountLayout({ children }) {

  return (
    <div className='bg-[#F6F6F6] flex flex-col gap-[20px] p-[15px] sm:px-[64px] py-[32px] min-h-[100vh] !h-auto'>
        <Header />
        <Sidebar>
          {children}
          <FloatingActionButtons />
        </Sidebar>
    </div>
  )
}

