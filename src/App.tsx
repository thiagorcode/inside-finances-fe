import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AppProvider } from './context';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}
