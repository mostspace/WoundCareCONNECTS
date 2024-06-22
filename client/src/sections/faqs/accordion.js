import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div className='flex flex-col gap-5'>
      <Accordion defaultExpanded className='!rounded-[20px] !m-0'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='!text-[18px] !font-manrope'>What qualifies as a "home" when home healthcare is being considered?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='!text-[16px] !font-manrope'>
          Your residence is wherever you call home. This could be your own house, an apartment, a relative's home, a senior community, or any other type of residence where you primarily reside. As long as it is your primary place of living, home healthcare services can be provided there to meet your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='!rounded-[20px] !m-0 !static'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='!text-[18px] !font-manrope'>Who can benefit from wound care home health services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='!text-[16px] !font-manrope'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='!rounded-[20px] !m-0 !static'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='!text-[18px] !font-manrope'>Why Opt for Wound Care Connects?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='!text-[16px] !font-manrope'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
