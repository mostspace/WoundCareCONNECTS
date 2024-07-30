import { Button } from '@mui/material';
import React from 'react';

const DefaultButton = ({ value, size, bg, color, weight, height, click, btnStatus, ...props }) => {
  return (
    <Button {...props}
      sx={{
        width: 'auto',
        height: '44px',
        fontFamily: 'Manrope',
        fontSize: '14px',
        padding: '8px 40px',
        color: '#ffffff',
        borderRadius: '8px',
        backgroundColor: '#00A4F4',
        textTransform: 'unset',
        '&:hover': {
          backgroundColor: '#00A4F4',
        }
      }}
      disabled={btnStatus}
    >
      {value}
    </Button>

  );
};

export default DefaultButton;
