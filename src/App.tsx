import { Box } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AppProvider } from './context';

const style = {
  maxWidth: '1200px',
  ml: 'auto',
  mr: 'auto',
};

export default function App() {
  return (
    <BrowserRouter>
      <Box component="div" sx={style}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Box>
    </BrowserRouter>
  );
}
