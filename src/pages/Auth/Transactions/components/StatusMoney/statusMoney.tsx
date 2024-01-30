import { Button, Container } from './styles';
import { ArrowCircleUp } from '@mui/icons-material/';
import { ArrowCircleDown } from '@mui/icons-material/';
import { AttachMoney } from '@mui/icons-material/';
import { FilterAltOutlined } from '@mui/icons-material/';

export const StatusMoney = () => {
  return (
    <>
      <Container>
        <div className="default">
          <div className="container-icon">
            <p>Entrada</p>
            <ArrowCircleUp sx={{ color: '#00B37E' }} />
          </div>
          <div className="container-title">
            <h2>R$ 17.400,00</h2>
          </div>
        </div>
        <div className="default">
          <div className="container-icon">
            <p>Saida</p>
            <ArrowCircleDown sx={{ color: '#F75A68' }} />
          </div>
          <div className="container-title">
            <h2>R$ 1.259,00</h2>
          </div>
        </div>
        <div className="green">
          <div className="container-icon">
            <p>Total</p>
            <AttachMoney sx={{ color: 'white' }} />
          </div>
          <div className="container-title">
            <h2>R$ 16.141,00</h2>
          </div>
        </div>
      </Container>
      <Button>
        <FilterAltOutlined sx={{ color: 'white' }} /> Filtro
      </Button>
    </>
  );
};
