import { Link, useLocation } from 'react-router-dom';
import {
  Equalizer,
  SpaceDashboard,
  Article,
  Inventory,
} from '@mui/icons-material';
import { Nav } from './styles';

const MobileMenu: React.FC = () => {

  const location = useLocation();
  if (location.pathname === '/settings') {
    return null; 
  }

  
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/controle">
            <SpaceDashboard sx={{ color: '#523CF8' }} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Inventory sx={{ color: '#646464' }} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Equalizer sx={{ color: '#646464' }} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Article sx={{ color: '#646464' }} />
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MobileMenu;
