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
        <AccordionContent>testado</AccordionContent>
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
        <AccordionContent>testado</AccordionContent>
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
        <AccordionContent>testado</AccordionContent>
      </AccordionRoot>
    </Container>
  );
};
