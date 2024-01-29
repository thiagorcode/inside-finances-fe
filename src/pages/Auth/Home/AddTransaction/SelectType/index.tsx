import * as S from './styles';
import { Payments, ProductionQuantityLimits } from '@mui/icons-material';
import { useFormTransaction } from '@/context/formTransaction';

export const SelectType = () => {
  const { onChangeType, formValues } = useFormTransaction();

  return (
    <S.ContainerCategory>
      <S.ButtonRecipe
        style={{
          backgroundColor: formValues.type === '+' ? '#233DC7' : '#ccc',
          color: formValues.type === '+' ? '#fff' : '#888',
        }}
        type="button"
        onClick={() => onChangeType('+')}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '100px',
            gap: '10px',
          }}
        >
          <Payments sx={{ color: 'white', marginLeft: '10px', fontSize: 55 }} />
          <S.Label> Receita</S.Label>
        </div>
      </S.ButtonRecipe>
      <S.ButtonExpense
        style={{
          backgroundColor: formValues.type === '-' ? '#233DC7' : '#ccc',
          color: formValues.type === '-' ? '#fff' : '#888',
        }}
        type="button"
        onClick={() => onChangeType('-')}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '100px',
            gap: '10px',
          }}
        >
          <ProductionQuantityLimits
            sx={{ color: 'white', marginLeft: '20px', fontSize: 55 }}
          />
          <S.Label> Despesas</S.Label>
        </div>
      </S.ButtonExpense>
    </S.ContainerCategory>
  );
};
