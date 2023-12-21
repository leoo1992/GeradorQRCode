import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

console.error = () => {
    console.log(`Comportamento não previsto`);
};
console.warn = () => {
    console.log(`Comportamento não previsto`);
};

try {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
    );
} catch (error) {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <ErrorPage />
    );
}
