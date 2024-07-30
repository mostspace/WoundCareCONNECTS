import React, { useState, useEffect } from 'react';
import { useScrollTrigger } from '@mui/material';

import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FloatingActionButtons() {
  const [showButton, setShowButton] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Adjust this value if needed
  });

  useEffect(() => {
    setShowButton(trigger);
  }, [trigger]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50" style={{ display: showButton ? 'block' : 'none' }}> 
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <UpIcon />
      </Fab>
    </div>
  );
}