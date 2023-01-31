import { ButtonStyled } from '@/global/styles/button';
import { Box } from '@mui/system';
import { ErrorForm } from '../Form/errorForm';
import { ButtonGroup } from '@mui/material';
import { AttachMoney, MoneyOff } from '@mui/icons-material';
import { FormikErrors, FormikValues } from 'formik';

interface SelectStatusProps {
  name: string;
  error?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<any>> | Promise<void>;
  value: boolean;
}

export const SelectStatus = ({
  error,
  setFieldValue,
  name,
  value,
}: SelectStatusProps) => {
  return (
    <Box component="div" sx={{ width: '100%' }}>
      <label
        htmlFor="form-category"
        style={{
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 'bold',
          marginBottom: '0.35rem',
        }}
      >
        Está pago?
      </label>
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
        id=""
      >
        <ButtonStyled
          onClick={() => setFieldValue(name, false)}
          value={value ? '' : 'true'}
        >
          <MoneyOff />

          <span>Calotei</span>
        </ButtonStyled>
        <ButtonStyled
          onClick={() => setFieldValue(name, true)}
          value={value ? 'true' : ''}
        >
          <AttachMoney />
          <span>Pago</span>
        </ButtonStyled>
      </ButtonGroup>
      <ErrorForm errorMessage={error} />
    </Box>
  );
};
