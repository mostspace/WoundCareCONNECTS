import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer, List, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { AuthContext } from 'src/auth/auth-provider';

// Assets and Constants
import { close, logo, menu } from 'src/assets';
import { navLinks } from 'src/constants';
import styles from 'src/style';

// Components
import DefaultButton from 'src/components/button/default-button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setNavItemActive = (navId) => {
    const cleanPath = location.pathname.slice(1);
    if (cleanPath === "" && navId === "/") {
      return 'nav-active';
    }
    return navId === cleanPath ? 'nav-active' : '';
  };

  const toggleDrawer = (newOpen) => () => {
    setToggle(newOpen);
  };

  const handleLogout = () => {
    logout();
  };

  console.log(user);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.id} disablePadding>
            <Link to={`/${link.id}`} className='w-full'>
              <ListItemButton>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        {/* Conditionally render Agency Dashboard link */}
        {isLoggedIn && (
          <ListItem key="patient-submission" disablePadding>
            <Link to="/patient-submission" className='w-full'>
              <ListItemButton>
                <ListItemText primary="Patient Submission" />
              </ListItemButton>
            </Link>
          </ListItem>
        )}
        {/* Conditionally render Agency Dashboard link */}
        {isLoggedIn && user?.role === 'agency' && (
          <ListItem key="agency-dashboard" disablePadding>
            <Link to="/agency" className='w-full'>
              <ListItemButton>
                <ListItemText primary="Agency Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          {isLoggedIn ? (
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          ) : (
            <Link to="/login" className='w-full'>
              <ListItemButton>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} ${isScrolled ? 'scrolled fixed w-full z-[100] bg-white h-[60px]' : 'bg-white h-[120px] nav-box-shadow'}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className={`w-full flex justify-between items-center navbar ${isScrolled ? 'h-[70px]' : ''}`}>
            <Link to="/">
              <img src={logo} alt='WoundCare CONNECTS' className={`${isScrolled ? 'w-[129px]' : 'w-[215px]'}`} />
            </Link>
            <ul className={`list-none lg:flex hidden justify-center items-center flex-1`}>
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-manrope font-normal hover:text-primary cursor-pointer text-[16px] ${isScrolled ? 'text-[14px]' : ''} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
                >
                  <Link
                    to={`/${nav.id}`}
                    className={setNavItemActive(nav.id)}
                  >{nav.title}</Link>
                </li>
              ))}
              {isLoggedIn && (
                <li className="font-manrope font-normal hover:text-primary cursor-pointer text-[16px] mr-10">
                  <Link to="/patient-submission" className={setNavItemActive('agency')}>Patient Submission</Link>
                </li>
              )}
              {isLoggedIn && user?.role === 'agency' && (
                <li className="font-manrope font-normal hover:text-primary cursor-pointer text-[16px]">
                  <Link to="/agency" className={setNavItemActive('agency')}>Agency Dashboard</Link>
                </li>
              )}
            </ul>
            {isLoggedIn ? (
              <div className="flex items-center">
                <Button onClick={handleLogout} className='!hidden lg:!block' variant="outlined">Sign Out</Button>
              </div>
            ) : (
              <Link to="/login" className='hidden lg:!block'>
                <DefaultButton value='Sign In' />
              </Link>
            )}

            <div className='lg:hidden flex flex-1 justify-end items-center'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain wc-toggle-menu'
                onClick={toggleDrawer(true)}
              />
              <Drawer open={toggle} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
