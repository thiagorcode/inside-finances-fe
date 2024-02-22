import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Diamond } from '@mui/icons-material/';
import { CalendarMonth } from '@mui/icons-material/';
import { Container } from './styles';
import { SelectItem, SelectContent } from '@/components/Select';
import { FilterModal } from './components/modal';
import { useModal } from '@/context/modal';

export const Filter = () => {
  const { modal, toggleModal } = useModal();

  function openModal(key: string) {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  }

  return (
    <>
      <Container>
        <button onClick={() => openModal('addFilter')} className="root">
          <div className="trigger">
            <div className="trigger-content">
              <div className="icon">
                <CalendarMonth sx={{ color: 'white' }} />
              </div>
              <div className="text">
                <h4>Data da Transição</h4>
                <p>01/07</p>
              </div>
            </div>
          </div>
        </button>
        <AccordionRoot className="root">
          <AccordionTrigger className="trigger">
            <div className="trigger-content">
              <div className="icon">
                <Diamond sx={{ color: 'white' }} />
              </div>
              <div className="text">
                <h4>Categoria</h4>
                <p>Filtro:</p>
              </div>
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
              <div className="text">
                <h4>Tipo</h4>
                <p>Filtro:</p>
              </div>
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
              <div className="text">
                <h4>Status</h4>
                <p>Filtro:</p>
              </div>
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
      {modal?.addFilter?.isOpen && <FilterModal />}
    </>
  );
};
