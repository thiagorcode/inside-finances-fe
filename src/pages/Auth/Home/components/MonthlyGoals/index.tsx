import React from 'react';
import * as S from './styles';
import IconMonthly from '../../../../../../assets/svg/edit.svg';
import Award from '../../../../../../assets/svg/Award.svg';
import Goal from '../../../../../../assets/svg/octicongoal-16.svg';
import ReactSpeedometer from 'react-d3-speedometer';
import { formatMoney } from '@/utils/formatMoney';
import { useModal } from '@/context/modal';

interface MonthlyGoalsInterface {
  expenseValue?: number;
  goalValue?: number;
  year?: string;
}

export default function MonthlyGoals({
  expenseValue = 0,
  goalValue = 0,
  year,
}: Readonly<MonthlyGoalsInterface>) {
  const { toggleModal } = useModal();

  const dateAt = new Date();

  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const selectMonth = month[dateAt.getMonth()];
  const handleOpenModal = () => {
    toggleModal({
      updateGoal: {
        isOpen: true,
      },
    });
  };
  return (
    <div>
      <S.ContainerCard>
        <>
          <S.MonthlyValue>
            <div>
              <S.Valuespan>{formatMoney(expenseValue)}</S.Valuespan>
              <button onClick={handleOpenModal}>
                <img src={IconMonthly} alt="Caneta para modificar" />
              </button>
            </div>
            <S.Datespan>
              {selectMonth}, {year}
            </S.Datespan>
          </S.MonthlyValue>
          <S.BarDivision />
          <div style={{ display: 'flex' }}>
            <S.Group>
              <div>
                <S.ImgStyle>
                  <img src={Award} alt="Medalha" />
                  <p> Valor atual</p>
                </S.ImgStyle>
                <span>{formatMoney(expenseValue)}</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <S.ImgStyle>
                  <img src={Goal} alt="Aro de alvo" />
                  <p> Meta mensal</p>
                </S.ImgStyle>
                <span>{formatMoney(goalValue)}</span>
              </div>
            </S.Group>
            <S.DirectionSpeedMater>
              <ReactSpeedometer
                width={180}
                height={115}
                maxValue={goalValue}
                maxSegmentLabels={1}
                segments={6}
                value={expenseValue}
                startColor={'#293DC7'}
                endColor={'#2f52d4 '}
                needleColor="#001dd8"
              />
              <S.Stylespan style={{ fontSize: '12px' }}>
                valor atual vs meta mensal
              </S.Stylespan>
            </S.DirectionSpeedMater>
          </div>
        </>
      </S.ContainerCard>
    </div>
  );
}
