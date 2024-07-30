import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, ListSubheader } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Padding } from '@mui/icons-material';


// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List className='flex flex-col gap-[16px]'>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: '500',
        },
      }}
    >
      {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}

      <ListItemText disableTypography primary={title} className='text-[16px]' />

      <ArrowForwardIosIcon className="text-[15px]"/>

      {info && info}
    </StyledNavItem>
  );
}
