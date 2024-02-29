import { useCallback, useEffect, useState } from 'react';
import {
  NotificationsNoneOutlined,
  Logout,
  ArrowBack,
} from '@mui/icons-material';
import {
  Container,
  Profile,
  Status,
  BoxProfile,
  BoxNotification,
  HeaderList,
} from './styles';
import { User, useUser } from '@/hooks/useUser';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoSettingsSharp } from "react-icons/io5";


const Header: React.FC = () => {
  const { increase, userAccess } = useUser();
  const location = useLocation();
  const [title, setTitle] = useState<string>();
  const navigate = useNavigate();
  const path = location.pathname as keyof typeof dataTitle;

  const handleClickLogout = useCallback(() => {
    increase({} as User);
  }, []);

  const dataTitle = {
    '/transactions': 'Transações',
    '/settings': 'Configuração',
    '/filter': 'Filtro',
  };

  useEffect(() => {
    function getTitle() {
      const keys = Object.keys(dataTitle);
      if (!keys.includes(path)) {
        setTitle('Pagina não existente!');
        return;
      }

      setTitle(dataTitle[path]);
    }
    getTitle();
  });

  return location.pathname === '/' ? (
    <Container>
      <BoxProfile>
        <Profile>T</Profile>
        <Status>
          <span>{userAccess.username}</span>
          <span>R$ 22 500</span>
        </Status>
      </BoxProfile>
      <BoxNotification>
        <button type="button">
          <NotificationsNoneOutlined />
        </button>
        <button onClick={() => navigate("settings")}>
          <IoSettingsSharp />
        </button>
        <button type="button" onClick={handleClickLogout}>
          <Logout />
        </button>
      </BoxNotification>
    </Container>
  ) : (
    <HeaderList>
      <button onClick={() => navigate('/')}>
        <ArrowBack sx={{ color: 'white' }} />
      </button>
      <h1 className="title">{title}</h1>
    </HeaderList>
  );
};

export default Header;
