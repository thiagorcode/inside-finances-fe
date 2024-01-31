import { Container } from './styles';
import icon from 'assets/svg/Icon.svg';

const data = [
  {
    title: 'Gasolina',
    description: 'Transporte',
    price: 'R$ 160,00',
    date: '17 Maio 2023',
  },
  {
    title: 'Gasolina',
    description: 'Transporte',
    price: 'R$ 160,00',
    date: '17 Maio 2023',
  },
  {
    title: 'Gasolina',
    description: 'Transporte',
    price: 'R$ 160,00',
    date: '17 Maio 2023',
  },
  {
    title: 'Gasolina',
    description: 'Transporte',
    price: 'R$ 160,00',
    date: '17 Maio 2023',
  },
  {
    title: 'Gasolina',
    description: 'Transporte',
    price: 'R$ 160,00',
    date: '17 Maio 2023',
  },
];

export const Spending = () => {
  return data.map((data, index) => (
    <Container key={index}>
      <div className="spanding-container">
        <div className="icon-container">
          <img className="icon" src={icon} alt="icon" />
          <div>
            <h3 className="title">{data.title}</h3>
            <p className="description">{data.description}</p>
          </div>
        </div>
        <div>
          <h3 className="title">{data.price}</h3>
          <p className="description">{data.date}</p>
        </div>
      </div>
    </Container>
  ));
};