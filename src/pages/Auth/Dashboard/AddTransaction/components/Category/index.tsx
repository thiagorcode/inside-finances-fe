import { useMemo, useCallback } from 'react';
import { FormikErrors, FormikValues } from 'formik';
import * as I from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { ErrorForm } from '@/components/Form/errorForm';
import { DataType } from '@/components/Form/DataType.type';
import { TransactionCategory } from '@/interface/transactionCategory.interface';

interface CategoryProps {
  name: string;
  error?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<any>> | Promise<void>;
  values: FormikValues;
  category: TransactionCategory[];
}

const ButtonStyled = styled(Button)(({ value }) => ({
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

export const Category = ({
  name,
  error,
  setFieldValue,
  values,
  category,
}: CategoryProps) => {
  // const Icon = useCallback(({ icon }: { icon: any }) => {

  //   const RenderIcon = I[icon];
  //   return <RenderIcon />;
  // }, []);
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
        Selecione a categoria
      </label>
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
        id=""
      >
        {category.map(_category => (
          <ButtonStyled
            key={_category.id}
            onClick={() => setFieldValue(name, _category.id)}
            value={values[name] === _category.id ? values[name] : ''}
          >
            {/* <Icon icon={_category.icon} /> */}
            <span>{_category.name}</span>
          </ButtonStyled>
        ))}
      </ButtonGroup>
      <ErrorForm errorMessage={error} />
    </Box>
  );
};
