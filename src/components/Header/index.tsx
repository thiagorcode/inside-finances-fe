import { useCallback } from 'react';
import { NotificationsNoneOutlined, Logout } from '@mui/icons-material';
import {
  Container,
  Profile,
  Status,
  BoxProfile,
  BoxNotification,
} from './styles';
import { User, useUser } from '@/hooks/useUser';

const Header: React.FC = () => {
  const { increase, userAccess } = useUser();

  const handleClickLogout = useCallback(() => {
    increase({} as User);
  }, []);
  return (
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
        <button type="button" onClick={handleClickLogout}>
          <Logout />
        </button>
      </BoxNotification>
    </Container>
  );
};

export default Header;
