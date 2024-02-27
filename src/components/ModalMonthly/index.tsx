import React, { useState } from 'react';
import * as S from './style';
import { IoClose } from 'react-icons/io5';

interface IModal {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  dataMonthly: {
    expenseValue: number;
    goal: number;
    id: string;
    userId: string;
    year: string;
    yearMonth: string;
  };
}

export default function ModalMonthly({
  openModal,
  setOpenModal,
  dataMonthly,
}: IModal) {
  const [modificationMonthly, setModificationMonthly] = useState('');
  const options = {
    minimumFractionDigits: 2,
  };

  function handleValueGoal(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setModificationMonthly(e.target.value);
  }

  function handleSaveClick() {
    if (modificationMonthly == '') {
      alert('insira alguma meta');
    } else {
      setOpenModal(!openModal);
    }
  }

  if (openModal) {
    return (
      <S.Background>
        <S.ContainerModal>
          <>
            <S.ButtonClose>
              <button onClick={() => setOpenModal(!openModal)}>
                <IoClose style={{ color: 'white' }} size={40} />
              </button>
            </S.ButtonClose>
            <S.InputsPart>
              <span>Meta mensal</span>
              <input
                type="text"
                value={modificationMonthly}
                onChange={handleValueGoal}
                placeholder={dataMonthly?.goal.toLocaleString('pt-br', options)}
              ></input>
              <button onClick={handleSaveClick}>Salvar</button>
            </S.InputsPart>
          </>
        </S.ContainerModal>
      </S.Background>
    );
  } else {
    return <></>;
  }
}
