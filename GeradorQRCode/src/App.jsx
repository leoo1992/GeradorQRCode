import './App.css';
import CardConversor from './Components/CardConversor/CardConversor';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import BackgroundImage from '../public/galaxy.jpg';

function App() {
  return (
    <PrimeReactProvider>
      <div className="fundo-pagina d-flex justify-content-center align-items-center align-content-center vh-100 w-100 opacity-85">
        <img src={BackgroundImage} alt="Background" className="background-image" />
      </div>
      <div className='d-flex justify-content-center align-items-center align-content-center vh-100 w-100 p-0 m-0 z-1'>
        <CardConversor />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
