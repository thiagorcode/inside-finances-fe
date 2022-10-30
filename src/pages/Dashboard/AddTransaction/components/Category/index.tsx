import { FormikErrors } from 'formik';
import { useMemo } from 'react';
import { FlightTakeoff, DirectionsCar, School } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { ErrorForm } from '@/components/Form/errorForm';

type DataType = {
  [x: string]: string;
};

interface CategoryProps {
  name: string;
  error: FormikErrors<DataType>;
}

const ButtonStyled = styled(Button)(() => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '6px',
  margin: '0.625rem 0',
  width: '30%',
  border: '1px solid',
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

const buttons = [
  <ButtonStyled key="one">
    <FlightTakeoff />
    <span>Viagem</span>
  </ButtonStyled>,
  <ButtonStyled key="two">
    <DirectionsCar />
    <span>Transporte</span>
  </ButtonStyled>,
  <ButtonStyled key="three">
    <School />
    <span>Estudos</span>
  </ButtonStyled>,
  <ButtonStyled key="one">
    <FlightTakeoff />
    <span>Viagem</span>
  </ButtonStyled>,
  <ButtonStyled key="two">
    <DirectionsCar />
    <span>Transporte</span>
  </ButtonStyled>,
  <ButtonStyled key="three">
    <School />
    <span>Estudos</span>
  </ButtonStyled>,
  <ButtonStyled key="one">
    <FlightTakeoff />
    <span>Viagem</span>
  </ButtonStyled>,
  <ButtonStyled key="two">
    <DirectionsCar />
    <span>Transporte</span>
  </ButtonStyled>,
  <ButtonStyled key="three">
    <School />
    <span>Estudos</span>
  </ButtonStyled>,
  <ButtonStyled key="one">
    <FlightTakeoff />
    <span>Viagem</span>
  </ButtonStyled>,
  <ButtonStyled key="two">
    <DirectionsCar />
    <span>Transporte</span>
  </ButtonStyled>,
  <ButtonStyled key="three">
    <School />
    <span>Estudos</span>
  </ButtonStyled>,
];

export const Category = ({ name, error }: CategoryProps) => {
  const isError = useMemo(() => (error ? error[name] : ''), [error, name]);
  return (
    <Box component="div" sx={{ width: '100%' }}>
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {buttons}
      </ButtonGroup>
      <ErrorForm errorMessage={isError} />
    </Box>
  );
};
