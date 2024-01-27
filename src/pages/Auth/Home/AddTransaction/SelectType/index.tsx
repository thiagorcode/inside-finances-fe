import React from 'react';
import * as S from './styles';
import { Payments, ProductionQuantityLimits } from '@mui/icons-material';
import Button from '@/components/Button';
import { useFormTransaction } from '@/context/formTransaction';

export const SelectType = () => {
  const { onChangeType, formValues, nextStep } = useFormTransaction();
  const isDisabledButton = !formValues.type;
  return (
    <S.ContainerCategory>
      <S.ButtonRecipe type="button" onClick={() => onChangeType('+')}>
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
      <S.ButtonExpense type="button" onClick={() => onChangeType('-')}>
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
      <Button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          height: '55px',
          marginTop: '70px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        types="primary"
        type="button"
        onClick={nextStep}
        disabled={isDisabledButton}
      >
        Proximo
      </Button>
    </S.ContainerCategory>
  );
};
