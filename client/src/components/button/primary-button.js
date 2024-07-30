import { Button } from '@mui/material';
import React from 'react';

const PrimaryButton = ({ value, size, bg, color, weight, height, click, btnStatus }) => {
  return (
    <Button
      sx={{
        background: bg,
        width: size,
        fontSize: '14px',
        color: color,
        padding: '8px 40px',
        borderRadius: '8px',
        fontWeight: weight ? weight : '400',
        textTransform: 'unset',
        fontFamily: '"Gilroy", sans-serif',
        fontStyle: 'normal',
        letterSpacing: 'unset',
        height: height ? height : '44px',
        "&:hover": {
          background: '#ff5b5c !important',
          color: '#fff !important'
        },
        "&:disabled": {
          background: '#ccc',
          color: '#999'
        }
      }}
      onClick={click}
      disabled={btnStatus}
    >
      {value}
    </Button>
  );
};

export default PrimaryButton;
