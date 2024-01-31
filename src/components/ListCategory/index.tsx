import { FormikErrors, FormikValues } from 'formik';
import { ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { ErrorForm } from '@/components/Form/errorForm';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import { ButtonStyled } from '@/global/styles/button';

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

export const ListCategory = ({
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
