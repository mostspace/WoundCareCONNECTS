import React, { useState, useEffect, useContext } from 'react';
import { Link, redirect, NavLink as RouterLink, useNavigate } from 'react-router-dom'; 

import { AuthContext } from 'src/auth/auth-provider';

// Assets
import { logo, doctor } from "src/assets";

// Constants
import { agencyNavLinks } from 'src/constants';

// Icons
// import HamburgerIcon from 'src/assets/svgs/HamburgerIcon';
import MenuIcon from '@mui/icons-material/Menu';

// @mui
import {
  Card, Table, Stack, Paper, Avatar, Select, FormControl, Button, Popover, TableContainer, TableHead, Box, Grid, Drawer, styled, alpha, Badge, Divider,
  Checkbox, TableRow, Menu, MenuItem, TableBody, TableCell, Container, Typography, IconButton, TablePagination, OutlinedInput, InputAdornment,
  Tabs, Tab, useMediaQuery, useTheme, Fade, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Chip, ListItemText, ListItemButton,
} from '@mui/material';


const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [shouldCloseDrawer, setShouldCloseDrawer] = useState(false); // New state flag
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // Update fixed state based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // const drawerList = () => (
  //   <>
  //     <Box
  //       sx={{ width: 250 }}
  //       role="presentation"
  //       onClick={toggleDrawer(false)}
  //       onKeyDown={toggleDrawer(false)}
  //     >
  //       {agencyNavLinks.map((item) => (
  //         <NavItem key={item.title} item={item} /> // Key on NavItem
  //       ))}
  //     </Box>
  //   </>
  // );

  const handleLogout = () => {
    handleUserClose();
    // Perform logout operations (clear tokens, update state, etc.)
    logout(false); // Update login state to false
    redirect("/home");
  };

  // Order Detail Popper Menu
  const [openUserMenu, setOpenUserMenu] = useState(null);

  const handleUserOpen = (event) => {
    setOpenUserMenu(event.currentTarget);
  };

  const handleUserClose = () => {
    setOpenUserMenu(null);
  };


  return (
    <>
      <div className="flex justify-center items-start">
        <div className="max-w-[1312px] w-full">
          <Container
            maxWidth="xl"
            className={`header-container ${isFixed ? 'fixed' : 'relative'} rounded-[16px]`}
            sx={{
              top: { xs: '0', md: '0' },
              left: { xs: '0', md: '50%' },
              zIndex: '999',
              transform: { xs: 'unset', md: 'translateX(-50%)' },
              padding: { xs: '16px', md: '16px 48px' },
              background: '#fff',
              width: { xs: '100%', md: '100%' }, // Keep navbar width consistent on larger screens
              maxWidth: { xs: '100%', md: '1312px', lg: '1312px' }, // Set a maximum width for larger screens
              boxShadow: isFixed ? { xs: '0 2px 4px rgba(0, 0, 0, 0.1)', md: '0 4px 8px rgba(0, 0, 0, 0.1)' } : 'none', // Add a shadow when fixed
              transition: 'all 0.3s ease', // Smooth transition for fixed state
            }}
          >
            <Grid container alignItems={"center"} justifyContent={"space-between"}>
              <Grid item xs={6} lg={3} md={3}>
                <Box sx={{ width: "200px" }}>
                  <Link to="/" smooth={'true'} duration={500} offset={-70} style={{display: "flex", alignItems: "center", gap: '1rem', cursor: "pointer"}}>
                    <StyledImage src={logo} alt="Logo" className="" />
                  </Link>
                </Box>
              </Grid>
            
              <Grid item md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "48px",
                  }}
                >
                  {agencyNavLinks.map((link) => (
                    <ScrollLink
                      className="font-gilroy"
                      key={link.title}
                      to={link.href}
                      smooth={'true'}
                      duration={500}
                      offset={-70} // Adjust the offset to accommodate your fixed header height
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "rgb(103 101 101)",
                        cursor: "pointer"
                      }}
                    >
                      {link.title}
                    </ScrollLink>
                  ))}
                  <div className="flex gap-[12px]">
                    <div className="text-end">
                      {/* <h6 className="text-heading text-[14px] font-normal leadig-[24px]">Home Health Agency</h6>
                      <p className="text-[#666] text-[12px] font-normal leading-[19px]">Home Health Agency</p> */}
                    </div>
                    <div className="rounded-full">
                      <IconButton>
                        <img src={doctor} className="w-[40px]" onClick={handleUserOpen}/>
                      </IconButton>
                    </div>
                  </div>
                </Box>
              </Grid>
              {/* <Grid item xs={6} 
                sx={{ 
                  display: { xs: "flex", md: "none" },
                  justifyContent: 'flex-end'
                }}
              >
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              </Grid> */}
            </Grid>
          </Container>
        </div>
      </div>
      
      {/* Drawer component */}
      {/* <Drawer
        anchor="left"
        open={drawerOpen && !shouldCloseDrawer} // Controlled Drawer
        onClose={() => setDrawerOpen(false)} 
      >
        {drawerList()}
      </Drawer> */}

      {/* Handle Order Detail Menu */}
      <Popover
        open={Boolean(openUserMenu)}
        anchorEl={openUserMenu}
        onClose={handleUserClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
            sx: {
            p: 1,
            width: 245,
            '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
                fontFamily: 'Gilroy'
            },
            },
        }}
      >     
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Popover>
    </>
  );
};

export default Header;

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '200px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '130px',
  },
}));

function NavItem({item}) {
  const { title, path } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
      onClick={() => {
        // Set the flag to close the drawer after the click
        setShouldCloseDrawer(true); 
      }}
    >
      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  );
}

export const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  padding: '12px 15px',
  fontFamily: 'Gilroy',
  position: 'relative',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));