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
        <AccordionDetails className='flex flex-col gap-[24px]'>
          <Typography className='!text-[16px] !font-manrope'>
            Chronic wounds affect approximately 6.5 million Americans, with certain individuals at a higher risk due to conditions such as diabetes, circulation disorders, limited mobility, recent surgeries, venous insufficiency, or undergoing dialysis. 
          </Typography>
          <Typography className='!text-[16px] !font-manrope'>
            Wound care home health services are designed to support healing and enhance quality of life. You may benefit from these services if you:
          </Typography>
          <ul className='list-disc list-inside'>
            <li>Have non-healing wounds that persist beyond two weeks or fail to heal within six weeks.</li>
            <li>Require complex treatment regimens.</li>
            <li>Develop new Stage III and IV pressure ulcers.</li>
            <li>Need preventive skin measures, such as appropriate support surfaces or moisture management.</li>
            <li>Have underlying conditions that complicate wound care, such as diabetes or heart disease.</li>
          </ul>
          <Typography className='!text-[16px] !font-manrope'>
            At Wound Care Connects, we are dedicated to supporting your journey to recovery and well-being. Our wound care home health services are tailored to meet your individual needs and promote optimal healing outcomes.
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
            The quality and convenience of your care make all the difference. At Wound Care Connects, we've revolutionized care delivery with a customizable, home-based approach that blends clinical excellence, innovation, and years of experience. Experience unmatched care tailored to you, our clients, patients, and valued healthcare collaborators
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='!rounded-[20px] !m-0 !static'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='!text-[18px] !font-manrope'>Who pays for home health services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='!text-[16px] !font-manrope'>
            Medicare covers 100% of home health services, with no co-pays or deductibles, and is widely accepted by most home health companies. Additionally, private insurance plans may also provide coverage for home health services.          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
