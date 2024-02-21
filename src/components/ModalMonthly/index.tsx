import React, { useState } from 'react';
import * as S from './style';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';

interface Imodal {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  datasMonthly: {
    dtCreated: string;
    dtUpdated: string;
    expenseValue: number;
    goal: number;
    id: string;
    quantityTransactions: number;
    recipeValue: number;
    total: number;
    userId: string;
    year: string;
    yearMonth: string;
  }[];
}

export default function ModalMonthly({
  openModal,
  setOpenModal,
  datasMonthly,
}: Imodal) {
  
  const options = {
    minimumFractionDigits: 2,
  };

  function Handlevaluegoal(){

  }

  
  function HandleSaveClick() {
    setOpenModal(!openModal);
  }

  if (openModal) {
    return (
      <S.Background>
        <S.ContainerModal>
          {datasMonthly.map(item => {
            return (
              <>
                <S.ButtonClose key={item.id}>
                  <button onClick={() => setOpenModal(!openModal)}>
                    <IoClose style={{ color: 'white' }} size={40} />
                  </button>
                </S.ButtonClose>
                <S.InputsPart>
                  <span>Meta mensal</span>
                  <input type="text" 
                    onChange={(e) => Handlevaluegoal()}
                    placeholder={item.goal.toLocaleString('pt-br', options)}
                  ></input>
                  <button onClick={HandleSaveClick}>Salvar</button>
                </S.InputsPart>
              </>
            );
          })}
        </S.ContainerModal>
      </S.Background>
    );
  } else {
    return <></>;
  }
}
