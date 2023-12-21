import './ErrorPage.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import BackgroundImage from './Assets/galaxy.jpg';

function ErrorPage() {
    return (
        <PrimeReactProvider>
                <div className="fundo-pagina d-flex justify-content-center align-items-center align-content-center vh-100 w-100">
                    <img src={BackgroundImage} alt="Background" className="background-image" />
                </div>
                <div className='d-flex justify-content-center align-items-center align-content-center text-center p-0 m-0 z-1 vh-100 w-100'>
                    <body className="bg-purple">
                        <div className="stars">
                            <div className="central-body d-flex justify-content-center align-items-center align-content-center align-self-center text-center">
                                <h1 className='p-0 m-0 text-white' style={{ fontSize: 150 }}>404</h1>
                            </div>
                            <div className="objects">
                                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="Rocket Image" />
                                <div className="earth-moon">
                                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="Earth Image" />
                                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="Moon Image" />
                                </div>
                                <div className="box_astronaut">
                                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="Astronaut Image" />
                                </div>
                            </div>
                            <div className="glowing_stars">
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star"></div>
                            </div>
                        </div>
                    </body>
                </div>
        </PrimeReactProvider>
    )
}

export default ErrorPage;
