import { useCallback, useEffect, useState } from 'react';
import { transactionsService } from '@/api/transactions/service';
import { useUser } from '@/hooks/useUser';
import { ManageTransaction } from '@/components/ManageTransactions';
import { Totalizes, Transition } from '@/interface/transactions.interface';
import { Button, Container, Container2 } from './styles';
import { useKeenSlider } from 'keen-slider/react';
import { useFilter } from '@/hooks/useFilter';
import { useNavigate } from 'react-router-dom';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  AttachMoney,
  FilterAltOutlined,
} from '@mui/icons-material';
import 'keen-slider/keen-slider.min.css';
import { useModal } from '@/context/modal';

export const TransactionsGeneral = () => {
  const { userAccess } = useUser();
  const { modal } = useModal();
  const [sliderRef] = useKeenSlider();
  const { filter } = useFilter();
  const navigate = useNavigate();
  const [totalizer, setTotalizer] = useState<Totalizes>();
  const [transition, setTransition] = useState<Transition[]>([]);

  const selectedFilters: string[] = [];

  if (filter?.category) selectedFilters.push('category');
  if (filter?.type) selectedFilters.push('type');
  if (filter?.status) selectedFilters.push('status');
  if (filter?.initDate) selectedFilters.push('initDate');
  if (filter?.endDate) selectedFilters.push('endDate');

  const loadTransaction = useCallback(async () => {
    const response = await transactionsService.listTransactionsByParams({
      token: userAccess.token!,
      startDate: filter?.initDate,
      endDate: filter?.endDate,
      isPaid: filter?.status,
      type: filter?.type,
      categoryId: filter?.category,
    });
    setTotalizer(response.data.transactions.totalizers);
    setTransition(response.data.transactions.transactions);
  }, []);

  useEffect(() => {
    loadTransaction();
  }, [userAccess.token]);

  function convertDate(dateString: string) {
    const sliceDate = dateString.slice(0, 10);
    const splitDate = sliceDate.split('-');
    const date = new Date(`${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`);

    return date.toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <>
      <Container>
        <div ref={sliderRef} className="container keen-slider">
          <div className="default keen-slider__slide">
            <div className="container-icon">
              <p>Entrada</p>
              <ArrowCircleUp sx={{ color: '#00B37E' }} />
            </div>
            <div className="container-title">
              <h2>R${totalizer?.recipe}</h2>
            </div>
          </div>
          <div className="default keen-slider__slide">
            <div className="container-icon">
              <p>Saida</p>
              <ArrowCircleDown sx={{ color: '#F75A68' }} />
            </div>
            <div className="container-title">
              <h2>R${totalizer?.expense}</h2>
            </div>
          </div>
          <div className="green keen-slider__slide">
            <div className="container-icon">
              <p>Total</p>
              <AttachMoney sx={{ color: 'white' }} />
            </div>
            <div className="container-title">
              <h2>R${totalizer?.totalBalance}</h2>
            </div>
          </div>
        </div>
      </Container>
      <Button
        checked={selectedFilters.length != 0}
        onClick={() => navigate('/filter')}
      >
        <FilterAltOutlined sx={{ color: 'white' }} />
        <span className="text">Filtro</span>
        {selectedFilters.length != 0 ? (
          <p className="text">({selectedFilters.length})</p>
        ) : (
          <p></p>
        )}
      </Button>
      <Container2>
        {transition.map((data, index) => (
          <div key={index} className="container">
            <div className="spanding-container">
              <div className="icon-container">
                <img className="icon" src={`assets/svg/Saude.svg`} alt="icon" />
                <div>
                  <h3 className="title">{data.category.name}</h3>
                  <p className="description">{data.description}</p>
                </div>
              </div>
              <div>
                <h3 className="title">R${data.value}</h3>
                <p className="description">{convertDate(data.date)}</p>
              </div>
            </div>
          </div>
        ))}
      </Container2>
      {modal?.manageTransaction?.isOpen && <ManageTransaction />}
    </>
  );
};
