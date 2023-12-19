import './App.css';
import InputQRcode from './Components/InputQRcode/InputQRcode';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from "primereact/api";

function App() {

  return (
    <PrimeReactProvider>
      <div className='d-flex flex-column justify-content-center align-items-center align-content-center vh-100 p-0 m-0 gap-4'>
        <InputQRcode />
      </div>
    </PrimeReactProvider>
  )
}

export default App
