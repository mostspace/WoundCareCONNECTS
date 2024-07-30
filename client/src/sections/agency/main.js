import React, { useState } from 'react'

// Components
import DataTable from './data-table';
import { Typography } from '@mui/material';

const Main = () => {
  return (
    <section className="w-full">
      <div className='flex flex-col gap-[24px]'>
        <Typography variant='h4' className='text-center pb-[48px] text-primary'>Patients List</Typography>
        <DataTable />
      </div>
    </section>
  );
}

export default Main;
