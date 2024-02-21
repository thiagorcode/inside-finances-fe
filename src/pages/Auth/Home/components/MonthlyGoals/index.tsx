import React, { useEffect, useState } from 'react';
import * as S from './styles';
import IconMonthly from '../../../../../../assets/svg/edit.svg';
import Award from '../../../../../../assets/svg/Award.svg';
import Goal from '../../../../../../assets/svg/octicongoal-16.svg';
import ReactSpeedometer from 'react-d3-speedometer';
import ModalMonthly from '@/components/ModalMonthly';
import { useUser } from '@/hooks/useUser';
import api from '../../../../../services/api'

export interface IDataMonthly {
  dtCreated: string
  dtUpdated: string
  expenseValue: number
  goal: number
  id: string
  quantityTransactions: number
  recipeValue: number
  total: number
  userId: string
  year: string
  yearMonth: string
}


export default  function MonthlyGoals() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { userAccess } = useUser();
  const [datasMonthly, setDatasMonthly] = useState<IDataMonthly[]>([])

  const DateAt = new Date();
  const CapturMonth = DateAt.getMonth() + 1;
  const Year = new Date().toLocaleDateString('pt-br', { year: 'numeric' });
  const options = {
    minimumFractionDigits: 2,
  };
  const Month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  const selectMonth = Month[DateAt.getMonth()]
  
  async function fetchData() {
    try {
      const response = await api.get(`/transactions/reports-monthly?userId=${userAccess.id}&yearMonth=${Year +'-'+ 0 + CapturMonth}`);
      setDatasMonthly([response.data.reportMonthly]);
    } catch (error) {
      console.error('Error fetching monthly reports:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <S.ContainerCard>
  {datasMonthly.length === 0 ? (
    <p>carregando</p>
  ) : (
    datasMonthly.map(item => (
      <>
        <S.MonthlyValue>
          <div>
            <S.Valuespan>
              R${' '}
              {item.recipeValue.toLocaleString('pt-br', options)}
            </S.Valuespan>
            <button onClick={() => setOpenModal(!openModal)}>
              <img src={IconMonthly} alt="Caneta para modificar" />
            </button>
            <ModalMonthly datasMonthly={datasMonthly} openModal={openModal} setOpenModal={setOpenModal} />
          </div>
          <S.Datespan>
             {selectMonth}, {item.year}
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
                R${' '}
                {item.recipeValue.toLocaleString('pt-br', options)}
              </span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <S.ImgStyle>
                <img src={Goal} alt="Aro de alvo" />
                <p> Meta mensal</p>
              </S.ImgStyle>
              <span>
                R${' '}
                {item.goal.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </S.Group>
          <S.DirectionSpeedMater>
            <ReactSpeedometer
              width={180}
              height={115}
              maxValue={item.goal}
              maxSegmentLabels={1}
              segments={6}
              value={item.recipeValue}
              startColor={'#293DC7'}
              endColor={'#2f52d4 '}
              needleColor="#001dd8"
            />
            <S.Stylespan style={{fontSize:'12px'}}>valor atual vs meta mensal</S.Stylespan>
          </S.DirectionSpeedMater>
        </div>
      </>
    ))
  )}
</S.ContainerCard>
  );
}
