import * as S from '../styles';
import {
    Add,
    Description
  } from '@mui/icons-material';


  interface CarrosselProps {
    toggleModal: any;
  }

export default function CarrosselButton({toggleModal}:CarrosselProps ) {

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
               onClick={() => handleOpenModal('addTransaction')}>
            <S.StyledAdd/>
            </button>
            </S.MotionIcon>
        </S.CarBox>
        <label> Adicionar</label>
        </div>
        <div>
        <S.CarBox>
        <S.MotionIcon>
        <button>
            <S.StyledDescript />
            </button>
            </S.MotionIcon>
        </S.CarBox>
        <label> Meus Gastos</label>
        </div>
       </S.CarContainer>
    </>
  )
}