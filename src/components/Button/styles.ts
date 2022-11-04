import ButtonMui from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const properties = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return {
        width: '40px',
        height: '40px',
      };

    case 'medium':
      return {
        width: '100%',
        height: '55px',
        borderRadius: '20px',
      };

    case 'large':
      return {
        width: '100%',
        height: '55px',
        borderRadius: '20px',
      };
    default:
      break;
  }
};

export const Button = styled(ButtonMui)(({ color, size }) => {
  const propertiesSize = properties(size);

  return {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px',
    border: '1px solid',
    lineHeight: 1.5,
    fontWeight: 'bold',
    color: color || '#fff',
    backgroundColor: '#233DC7',
    borderColor: '#233DC7',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Poppins'].join(','),
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
    ...propertiesSize,
  };
});
