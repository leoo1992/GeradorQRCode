import { useState } from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import Button from '@mui/material/Button';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import GeneratorPage from './pages/Generator/GeneratorPage';

function App() {
  const [showErrorPage, setShowErrorPage] = useState(false);

  const handleClick = () => {
    setShowErrorPage(!showErrorPage);
  };

  return (
    <PrimeReactProvider>
      {showErrorPage ? (
        <>
          <ErrorPage />
          <Button
            variant="contained"
            color="primary"
            className='position-absolute bottom-0 end-0 z-2'
            onClick={handleClick}
          >
            Voltar
          </Button>
        </>
      ) : (
        <GeneratorPage handleClick={handleClick} />
      )}
    </PrimeReactProvider>
  );
}

export default App;
