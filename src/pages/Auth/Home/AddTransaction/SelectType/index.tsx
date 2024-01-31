import * as S from './styles';
import { Payments, ProductionQuantityLimits } from '@mui/icons-material';
import { useFormTransaction } from '@/context/formTransaction';

export const SelectType = () => {
  const { onChangeType, formValues } = useFormTransaction();

  return (
    <S.ContainerCategory>
      <S.ButtonRecipe
        selected={formValues.type === '+'}
        type="button"
        onClick={() => onChangeType('+')}
      >
        <S.ButtonContent>
          <Payments sx={{ color: 'white', marginLeft: '10px', fontSize: 55 }} />
          <S.Label> Receita</S.Label>
        </S.ButtonContent>
      </S.ButtonRecipe>
      <S.ButtonExpense
        selected={formValues.type === '-'}
        type="button"
        onClick={() => onChangeType('-')}
      >
        <S.ButtonContent>
          <ProductionQuantityLimits
            sx={{ color: 'white', marginLeft: '20px', fontSize: 55 }}
          />
          <S.Label> Despesas</S.Label>
        </S.ButtonContent>
      </S.ButtonExpense>
    </S.ContainerCategory>
  );
};
