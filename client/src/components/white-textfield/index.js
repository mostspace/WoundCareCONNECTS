// @mui
import {
  styled, TextField,
} from '@mui/material';

const WhiteTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'white', // Change the text color
    backgroundColor: 'transparent',
  },
  '& .MuiInputLabel-root': {
    color: 'white !important', // Change the label color
    backgroundColor: 'transparent',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Change the border color
      backgroundColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'white', // Change the border color on hover
      backgroundColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Change the border color when focused
      backgroundColor: 'transparent',
    },
  },
  '& input:-webkit-autofill': {
    '-webkit-text-fill-color': '#ffffff', /* Change text color to #ffffff */
    '-webkit-box-shadow': '0 0 0 100px transparent inset', /* Prevent background color */
    'transition': 'background-color 5000s ease-in-out 0s', /* Adjust transition timing */
  },
  '& input:-webkit-autofill:focus': {
    'caret-color': 'white !important', /* Change caret color to white */
  },
}));

export default WhiteTextField;
