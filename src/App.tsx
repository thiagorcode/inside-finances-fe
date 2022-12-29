import { Box } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const style = {
  maxWidth: '1200px',
  ml: 'auto',
  mr: 'auto',
};

export default function App() {
  return (
    <BrowserRouter>
      <Box component="div" sx={style}>
        <Routes />
      </Box>
    </BrowserRouter>
  );
}
