/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../../App.css';
import Button from '@mui/material/Button';
import BackgroundImage from '../../Assets/galaxy.jpg';
import CardConversor from '../../Components/CardConversor/CardConversor';

const GeneratorPage = ({ handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const shadowStyle = {
    transition: 'box-shadow 0.3s ease-in-out',
    animation: 'pulse 1.5s infinite',
  };

  const hoverStyle = {
    boxShadow: '0px 0px 400px 70px cyan',
    animation: 'none',
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0px 0px 300px 60px cyan;
            }
            50% {
              box-shadow: 0px 0px 150px 30px cyan;
            }
            100% {
              box-shadow: 0px 0px 300px 60px cyan;
            }
          }
        `}
      </style>
      <div className="fundo-pagina d-flex justify-content-center align-items-center align-content-center vh-100 w-100">
        <img src={BackgroundImage} alt="Background" className="background-image" />
      </div>
      <div className='d-flex justify-content-center align-items-center align-content-center vh-100 w-100 p-0 m-0 z-1'>
        <CardConversor />
        <Button
          variant="contained"
          color="secondary"
          className='position-absolute bottom-0 end-0 z-2 opacity-100 border-0'
          style={{ ...shadowStyle, ...(isHovered ? hoverStyle : {}) }}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="small"
        >
          Demo 404
        </Button>
      </div>
    </>
  );
};

export default GeneratorPage;
