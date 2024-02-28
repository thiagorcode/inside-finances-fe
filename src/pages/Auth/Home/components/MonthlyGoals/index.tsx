import React, { useEffect, useState } from 'react';
import * as S from './styles';
import IconMonthly from '../../../../../../assets/svg/edit.svg';
import Award from '../../../../../../assets/svg/Award.svg';
import Goal from '../../../../../../assets/svg/octicongoal-16.svg';
import ReactSpeedometer from 'react-d3-speedometer';
import ModalMonthly from '@/components/ModalMonthly';
import { useUser } from '@/hooks/useUser';
import api from '../../../../../services/api';
import { display } from '@mui/system';

export interface IDataMonthly {
  expenseValue: number;
  goal: number;
  id: string;
  recipeValue: number;
  total: number;
  userId: string;
  year: string;
  yearMonth: string;
}

export default function MonthlyGoals() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { userAccess } = useUser();
  const [dataMonthly, setDataMonthly] = useState<IDataMonthly | null>(null);

  const formattedExpenseValue = (dataMonthly?.expenseValue ?? 0) * -1;

  const dateAt = new Date();
  const captureMonth = dateAt.getMonth() + 1;
  const monthFormatted = captureMonth <= 9 ? '0' + captureMonth : captureMonth;
  const year = new Date().toLocaleDateString('pt-br', { year: 'numeric' });
  const options = {
    minimumFractionDigits: 2,
  };
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

  async function fetchData() {
    try {
      const response = await api.get(
        `/transactions/reports-monthly?userId=${userAccess.id}&yearMonth=${year}-${monthFormatted}`,
      );
      setDataMonthly(response.data.reportMonthly);
    } catch (error) {
      console.error('Error fetching monthly reports:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!dataMonthly ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h1>carregando ..</h1>
        </div>
      ) : (
        <S.ContainerCard>
          <>
            <S.MonthlyValue>
              <div>
                <S.Valuespan>
                  R$ {formattedExpenseValue.toLocaleString('pt-br', options)}
                </S.Valuespan>
                <button onClick={() => setOpenModal(!openModal)}>
                  <img src={IconMonthly} alt="Caneta para modificar" />
                </button>
                <ModalMonthly
                  dataMonthly={dataMonthly}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </div>
              <S.Datespan>
                {selectMonth}, {dataMonthly?.year}
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
                  <span>
                    R$
                    {formattedExpenseValue.toLocaleString('pt-br', options)}
                  </span>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <S.ImgStyle>
                    <img src={Goal} alt="Aro de alvo" />
                    <p> Meta mensal</p>
                  </S.ImgStyle>
                  <span>
                    R$
                    {dataMonthly?.goal.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </S.Group>
              <S.DirectionSpeedMater>
                <ReactSpeedometer
                  width={180}
                  height={115}
                  maxValue={dataMonthly?.goal}
                  maxSegmentLabels={1}
                  segments={6}
                  value={formattedExpenseValue}
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
      )}
    </div>
  );
}
