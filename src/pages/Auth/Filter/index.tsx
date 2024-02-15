import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Diamond } from '@mui/icons-material/';
import { Container } from './styles';
import { SelectItem, SelectRoot } from '@/components/Select';

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
          <SelectRoot>
            <SelectItem key="alimentação">Alimentação</SelectItem>
            <SelectItem key="alimentação">Saúde</SelectItem>
            <SelectItem key="alimentação">Transporte</SelectItem>
          </SelectRoot>
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
