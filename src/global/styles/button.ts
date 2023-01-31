import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)(({ value }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '6px',
  margin: '0.625rem 0',
  width: '30%',
  border: '1px solid',
  backgroundColor: value ? '#2644D8' : '',
  borderColor: value ? '#2644D8' : '',
  lineHeight: 1.5,
  color: '#fff',
  borderRightColor: '#fff !important',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#2644D8',
    borderColor: '#2644D8',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2644D8',
    borderColor: '#2644D8',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));
