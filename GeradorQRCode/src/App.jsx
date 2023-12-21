import { useState } from 'react';
import './App.css';
import CardConversor from './Components/CardConversor/CardConversor';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import Button from '@mui/material/Button';
import BackgroundImage from './Assets/galaxy.jpg';
import ErrorPage from './ErrorPage';

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
        <>
          <div className="fundo-pagina d-flex justify-content-center align-items-center align-content-center vh-100 w-100">
            <img src={BackgroundImage} alt="Background" className="background-image" />
          </div>
          <div className='d-flex justify-content-center align-items-center align-content-center vh-100 w-100 p-0 m-0 z-1'>
            <CardConversor />
            <Button
              variant="contained"
              color="secondary"
              className='d-none position-absolute bottom-0 end-0 z-2 opacity-50'
              onClick={handleClick}
            >
              404 Error
            </Button>
          </div>
        </>
      )}
    </PrimeReactProvider>
  );
}

export default App;
