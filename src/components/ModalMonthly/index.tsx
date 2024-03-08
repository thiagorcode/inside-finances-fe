import React, { useState } from 'react';
import * as S from './style';
import { IoClose } from 'react-icons/io5';
import { useModal } from '@/context/modal';

interface IModal {
  dataMonthly: {
    goal: number;
    id: string;
    userId: string;
  };
}

export default function ModalMonthly({ dataMonthly }: IModal) {
  const { toggleModal } = useModal();

  const [modificationMonthly, setModificationMonthly] = useState('');

  function handleValueGoal(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setModificationMonthly(e.target.value);
  }

  const handleCloseModal = () => {
    toggleModal({
      updateGoal: {
        isOpen: false,
      },
    });
  };
  const handleSaveClick = () => {
    if (modificationMonthly == '') {
      alert('insira alguma meta');
    } else {
      handleCloseModal();
    }
  };

  return (
    <S.Background>
      <S.ContainerModal>
        <>
          <S.ButtonClose>
            <button onClick={handleCloseModal}>
              <IoClose style={{ color: 'white' }} size={40} />
            </button>
          </S.ButtonClose>
          <S.InputsPart>
            <span>Meta mensal</span>
            <input
              type="number"
              value={modificationMonthly}
              onChange={handleValueGoal}
              placeholder={dataMonthly?.goal.toString()}
            ></input>
            <button onClick={handleSaveClick}>Salvar</button>
          </S.InputsPart>
        </>
      </S.ContainerModal>
    </S.Background>
  );
}
