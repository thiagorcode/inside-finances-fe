import React, { useState } from 'react';
import * as S from './style';
import { IoClose } from 'react-icons/io5';

interface Imodal {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  datasMonthly:any;
}



export default function ModalMonthly({
  openModal,
  setOpenModal,
  datasMonthly,
}: Imodal) {
  
  const [modificationMonthly, setModificationMonthly] = useState('')
  const options = {
    minimumFractionDigits: 2,
  };

  function Handlevaluegoal(e: { target: { value: React.SetStateAction<string>; }; }){
    setModificationMonthly(e.target.value)
  }

  
  function HandleSaveClick() {
    if(modificationMonthly == ''){
      alert ('insira alguma meta')
    }else{
      setOpenModal(!openModal);
    }
  }

  if (openModal) {
    return (

      <S.Background>
        <S.ContainerModal>
              <>
                <S.ButtonClose >
                  <button onClick={() => setOpenModal(!openModal)}>
                    <IoClose style={{ color: 'white' }} size={40} />
                  </button>
                </S.ButtonClose>
                <S.InputsPart>
                  <span>Meta mensal</span>
                  <input type="text" 
                    value={modificationMonthly}
                    onChange={Handlevaluegoal}
                    placeholder={datasMonthly?.goal.toLocaleString('pt-br', options)}
                  ></input>
                  <button onClick={HandleSaveClick}>Salvar</button>
                </S.InputsPart>
              </>
            </S.ContainerModal>
      </S.Background>
    );
  } else {
    return <></>;
  }
}
