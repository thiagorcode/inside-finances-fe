import { Input } from '@/components/Input';
import { Container } from './style';

export const DateForm = () => {
  return (
    <Container>
      <form className="form">
        <div className="content">
          <label htmlFor="date init">Data Inicial</label>
          <Input id="date init" type="date" />
        </div>
        <div className="content">
          <label htmlFor="date final">Data Final</label>
          <Input id="date final" type="date" />
        </div>
        <button className="button">Confirmar</button>
      </form>
    </Container>
  );
};
