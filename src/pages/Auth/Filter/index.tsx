import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Diamond } from '@mui/icons-material/';
import { Container } from './styles';
import { SelectItem, SelectContent } from '@/components/Select';

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
          <SelectContent>
            <SelectItem key="food">Alimentação</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="heal">Saúde</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="trasport">Trasporte</SelectItem>
          </SelectContent>
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
          <SelectContent>
            <SelectItem key="revenue">Receita</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="expense">Despesa</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="all">Todos</SelectItem>
          </SelectContent>
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
          <SelectContent>
            <SelectItem key="pay">Pago</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="no pay">Não Pago</SelectItem>
          </SelectContent>
          <SelectContent>
            <SelectItem key="all">Todos</SelectItem>
          </SelectContent>
        </AccordionContent>
      </AccordionRoot>
      <div className="button-content">
        <button className="button-submit">Aplicar</button>
        <button className="button-reset">Resetar</button>
      </div>
    </Container>
  );
};
