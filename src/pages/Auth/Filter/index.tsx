import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Diamond } from '@mui/icons-material/';
import { Container } from './styles';

export const Filter = () => {
  return (
    <Container>
      <AccordionRoot className="root">
        <AccordionTrigger className="trigger">
          <div className="trigger-content">
            <div className="icon">
              <Diamond sx={{ color: 'white' }} />
            </div>
            Categoria
          </div>
        </AccordionTrigger>
        <AccordionContent className="content">
          <button className="item">Saúde</button>
          <button className="item">Alimentação</button>
          <button className="item">Contas</button>
        </AccordionContent>
      </AccordionRoot>
      <AccordionRoot className="root">
        <AccordionTrigger className="trigger">
          <div className="trigger-content">
            <div className="icon">
              <Diamond sx={{ color: 'white' }} />
            </div>
            Tipo
          </div>
        </AccordionTrigger>
        <AccordionContent className="content">
          <button className="item">Receita</button>
          <button className="item">Despesa</button>
          <button className="item">Todos</button>
        </AccordionContent>
      </AccordionRoot>
      <AccordionRoot className="root">
        <AccordionTrigger className="trigger">
          <div className="trigger-content">
            <div className="icon">
              <Diamond sx={{ color: 'white' }} />
            </div>
            Status
          </div>
        </AccordionTrigger>
        <AccordionContent className="content">
          <button className="item">Pago</button>
          <button className="item">Não Pago</button>
          <button className="item">Todos</button>
        </AccordionContent>
      </AccordionRoot>
    </Container>
  );
};
