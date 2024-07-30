import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function DropdownMenu({ title, sort, onSort, sortOptions }) {
  const popover = usePopover();

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={popover.onOpen}
        endIcon={
          <Iconify
            icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
          />
        }
        sx={{ fontWeight: 'normal', textTransform: 'unset', color: '#A3A3A3', fontSize: '14px', fontFamily: 'manrope' }}
      >
        {title}
        <Box
          component="span"
          sx={{
            fontWeight: 'normal',
            textTransform: 'normal',
            fontSize: '14px',
            color: '#181818',
            fontFamily: 'manrope',
          }}
        >
          {sort}
        </Box>
      </Button>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
        {sortOptions.map((option) => (
          <MenuItem className='text-[14px] font-gilroy'
            key={option.value}
            selected={option.value === sort}
            onClick={() => {
              popover.onClose();
              onSort(option.value);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

DropdownMenu.propTypes = {
  onSort: PropTypes.func,
  sort: PropTypes.string,
  sortOptions: PropTypes.array,
};
