import { Box } from '@mui/system';
import * as S from './styles';
interface SuccessProps {
  setStep: (value: 0 | 1) => void;
}

export const Success = ({ setStep }: SuccessProps) => {
  return (
    <Box
      sx={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf: 'center',
      }}
    >
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        height: '100%',
        marginTop: '25px'
      }} > 
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <S.Image src="assets/svg/savetransaction.svg" alt="Transação salva" />
      <h2>Transação salva com sucesso.</h2>
      </Box>
      <S.Button type="button" onClick={() => setStep(0)}>
        Adicionar Novo
      </S.Button>
      </Box>
    </Box>
  );
};
