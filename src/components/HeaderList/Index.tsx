import { useEffect, useState } from 'react';
import { Header } from './styles';
import { ArrowBack } from '@mui/icons-material/';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HeaderList() {
  const [title, setTitle] = useState<string>();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname as keyof typeof dataTitle;

  const dataTitle = {
    '/transactions': 'Transações',
    '/settings': 'Settings',
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

  return (
    <Header>
      <button onClick={() => navigate('/')}>
        <ArrowBack sx={{ color: 'white' }} />
      </button>
      <h1 className="title">{title}</h1>
    </Header>
  );
}
