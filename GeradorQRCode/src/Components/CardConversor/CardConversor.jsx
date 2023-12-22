import { useState } from 'react';
import { MDBCard } from 'mdb-react-ui-kit';
import CardTitle from './subComponents/CardTitle';
import CardBody from './subComponents/CardBody';
import ThemeSwitch from './subComponents/ThemeSwitch';
import { Button } from '@mui/material';
import QRscanner from '../../pages/Reader/QRscanner';
import './CardConversor.css'; // Import a CSS file for styling

function CardConversor() {
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [isSwitchChecked1, setIsSwitchChecked1] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [showCard1, setShowCard1] = useState(true);

    const cardStyle = {
        width: '315px',
        minHeight: '570px',
    };

    const WolfFont = {
        fontFamily: 'Alkatra',
    };

    const hoverStyle = {
        boxShadow: '0px 0px 300px 5px cyan',
    };

    const handleSwitchChange = (cardNumber, checked) => {
        if (cardNumber === 1) {
            setIsSwitchChecked(checked);
        } else if (cardNumber === 2) {
            setIsSwitchChecked1(checked);
        }
    };

    const handleButtonClick = (cardNumber) => {
        setShowCard1(cardNumber === 1);
    };

    return (
        <>
            {showCard1 && (
                <div className={`card-container ${showCard1 ? 'flip' : ''}`}>
                    <MDBCard
                        className={`card m-0 p-0 d-flex text-center shadow-lg opacity-85 ${!isSwitchChecked ? 'bg-purple-900' : ''}`}
                        style={cardStyle}
                    >
                        <div className='text-end d-flex justify-content-end align-content-end align-items-end m-0 p-0'>
                            <ThemeSwitch
                                className='m-0 p-0'
                                onSwitchChange={(checked) => handleSwitchChange(1, !checked)}
                                defaultChecked={isSwitchChecked}
                            />
                        </div>
                        <CardTitle />
                        <CardBody />
                        <div className='p-0 m-0 rounded-5 mb-4 mt-3'>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="opacity-100 fs-6 m-0 shadow-sm"
                                style={{ ...WolfFont, ...(isHovered ? hoverStyle : {}) }}
                                size="small"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => handleButtonClick(2)}
                            >
                                <span className="m-0 p-0 text-capitalize">Ler QR code</span>
                            </Button>
                        </div>
                    </MDBCard>
                </div>
            )}
            {!showCard1 && (
                <div className={`card-container ${!showCard1 ? 'flip' : ''}`}>
                    <MDBCard
                        className={`card m-0 p-0 d-flex text-center shadow-lg opacity-85 ${!isSwitchChecked1 ? 'bg-purple-900' : ''}`}
                        style={cardStyle}
                    >
                        <div className='text-end d-flex justify-content-end align-content-end align-items-end m-0 p-0'>
                            <ThemeSwitch
                                className='m-0 p-0'
                                onSwitchChange={(checked) => handleSwitchChange(2, !checked)}
                                defaultChecked={isSwitchChecked1}
                            />
                        </div>
                        <QRscanner />
                        <div className='p-0 m-0 mt-5'>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="opacity-100 fs-6 m-0 shadow-sm mt-5 mb-3"
                                style={{ ...WolfFont, ...(isHovered2 ? hoverStyle : {}) }}
                                size="small"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                onClick={() => handleButtonClick(1)}
                            >
                                <span className="m-0 p-0 text-capitalize">Gerar QR code</span>
                            </Button>
                        </div>
                    </MDBCard>
                </div>
            )}
        </>
    );
}

export default CardConversor;
