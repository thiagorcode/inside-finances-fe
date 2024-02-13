import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Container } from './styles';

export const Filter = () => {
  return (
    <Container>
      <AccordionRoot>
        <AccordionTrigger className="trigger">teste</AccordionTrigger>
        <AccordionContent>testado</AccordionContent>
      </AccordionRoot>
    </Container>
  );
};
