import { useFilter } from '@/hooks/useFilter';
import { Button, Container } from './styles';
import { ArrowCircleUp } from '@mui/icons-material/';
import { ArrowCircleDown } from '@mui/icons-material/';
import { AttachMoney } from '@mui/icons-material/';
import { FilterAltOutlined } from '@mui/icons-material/';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useNavigate } from 'react-router-dom';

export const StatusMoney = () => {
  const [sliderRef] = useKeenSlider();
  const { filter } = useFilter();
  const navigate = useNavigate();

  const selectedFilters: string[] = [];

  if (filter?.category) selectedFilters.push('category');
  if (filter?.type) selectedFilters.push('type');
  if (filter?.status) selectedFilters.push('status');
  if (filter?.initDate) selectedFilters.push('initDate');
  if (filter?.endDate) selectedFilters.push('endDate');

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
              <h2>R$ 17.400,00</h2>
            </div>
          </div>
          <div className="default keen-slider__slide">
            <div className="container-icon">
              <p>Saida</p>
              <ArrowCircleDown sx={{ color: '#F75A68' }} />
            </div>
            <div className="container-title">
              <h2>R$ 1.259,00</h2>
            </div>
          </div>
          <div className="green keen-slider__slide">
            <div className="container-icon">
              <p>Total</p>
              <AttachMoney sx={{ color: 'white' }} />
            </div>
            <div className="container-title">
              <h2>R$ 16.141,00</h2>
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
    </>
  );
};
