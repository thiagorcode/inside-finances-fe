import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface CarouselProps {
  toggleModal: (modalData: Record<string, { isOpen: boolean }>) => void;
}

export default function CarouselButton({ toggleModal }: CarouselProps) {
  const navigate = useNavigate();
  const handleOpenModal = (key: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  };

  return (
    <>
      <S.CarContainer>
        <div>
          <S.CarBox>
            <S.MotionIcon>
              <button
                type="button"
                onClick={() => handleOpenModal('addTransaction')}
              >
                <S.StyledAdd />
              </button>
            </S.MotionIcon>
          </S.CarBox>
          <span> Adicionar</span>
        </div>
        <div>
          <S.CarBox>
            <S.MotionIcon>
              <button onClick={() => navigate('/transactions')}>
                <S.StyledDescript />
              </button>
            </S.MotionIcon>
          </S.CarBox>
          <span> Meus Gastos</span>
        </div>
      </S.CarContainer>
    </>
  );
}
