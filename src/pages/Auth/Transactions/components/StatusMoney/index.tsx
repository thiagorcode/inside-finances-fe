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
  const navigate = useNavigate();

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
      <Button onClick={() => navigate('/filter')}>
        <FilterAltOutlined sx={{ color: 'white' }} />
        <span className="text">Filtro</span>
      </Button>
    </>
  );
};
