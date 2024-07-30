import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Drawer, IconButton, styled } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import {  } from "src/assets";
import { Tabs, Tab, useMediaQuery, useTheme, Avatar } from '@mui/material';
import { agencyNavLinks } from 'src/constants';
import NavSection from "src/components/nav-section/nav-section";

function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Main = ({ children }) => {

  return (
    <>     
      <Container 
        maxWidth="xl"
        sx={{
          height: '100%',
          padding: { xs: '16px', md: '48px' },
          background: '#ffffff',
          borderRadius: '24px',
          width: { xs: '100%', md: '100%' }, // Keep navbar width consistent on larger screens
          maxWidth: { xs: '100%', md: '1312px', lg: '1312px' }, // Set a maximum width for larger screens
        }}
      >
        <Grid container padding="32px 0 0 0">
          {children}
        </Grid>
      </Container>
    </>
  );
};

export default Main;