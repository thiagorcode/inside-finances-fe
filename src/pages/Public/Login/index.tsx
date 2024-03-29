import { FormEvent, useCallback, useState } from 'react';
import * as S from './styles';
import { useAuth } from '@/context/auth';

export default function Login() {
  // TODO: Adicionar Formik
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await login(email, password);
      } catch (error) {
        console.log(error);
      }
    },
    [email, password],
  );

  return (
    <>
      {/* <Bordes>
        <img
          className="triangle1"
          src="assets/img/Vector1.png"
          alt="triangle"
          width="350px"
        />
        <img
          className="money"
          src="assets/img/dollar.png"
          alt="moeda"
          width="150px"
        />
        <img
          className="tringdown1"
          src="assets/img/baixo1.png"
          alt="triangledown"
          width="150px"
        />
      </Bordes> */}
      {/* <HeaderLogin>
        <img
          className="triangle"
          src="assets/img/Vector2.png"
          alt="triangle2"
          width="355px"
        />
        <img
          className="tringdow2"
          src="assets/img/baixo2.png"
          alt="triangledown2"
          width="78px"
        />
      </HeaderLogin> */}
      <S.Container>
        <S.Form onSubmit={handleFormSubmit}>
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          {/* <a className="phrase-register" href="http://localhost:3000/register">
          <p>Cadastrar Agora</p>
        </a> */}
          <button type="submit">Entrar</button>
        </S.Form>
      </S.Container>
    </>
  );
}
