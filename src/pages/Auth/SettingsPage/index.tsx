import React, { useEffect } from 'react';
import * as S from './style';
import { RiUserSmileLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { ImExit } from "react-icons/im";



export default function SettingsPage() {
    
  useEffect(() => {
    document.title = 'Configuração';
  }, []);

  return (
    <S.DimensionContainer>
     <S.Container>
        <S.Style>
        <RiUserSmileLine size={20} />
        </S.Style>
        <span>Dados Pessoais</span>
       <div  style={{marginLeft:'30%'}}>
       <FaArrowRight  size={22} />
       </div>
     </S.Container>
     <S.ContainerGlobal>
        <S.Style>
        <RiGlobalLine size={20}/>
        </S.Style>
        <span>Importar Transações</span>
        <div  style={{marginLeft:'15%'}}>
       <FaArrowRight   size={22}/>
       </div>
     </S.ContainerGlobal>
     <S.ContainerGlobal>
     <S.Style>
        <MdOutlineEmail size={20}/>
        </S.Style>
        <span>Contato</span>
        <div style={{marginLeft:'50%'}}>
       <FaArrowRight   size={22} />
       </div>
     </S.ContainerGlobal>
     <S.ContainerExit>
     <span>Logout</span>
     <div  style={{marginLeft:'65%'}}>
       <ImExit size={20}/>
       </div>
     </S.ContainerExit>
    </S.DimensionContainer>
  );
}
