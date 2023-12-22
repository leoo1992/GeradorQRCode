import { useRef, useState } from 'react';
import './QRstyle.css'
import { Button } from '@mui/material';
import CardTitle from '../../Components/CardConversor/subComponents/CardTitle';
import { MDBCard } from 'mdb-react-ui-kit';

function QRScanner() {
    const fileInputRef = useRef(null);
    const textQRCodeRef = useRef(null);
    const imgQRCodeRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    const WolfFont = {
        fontFamily: 'Alkatra'
    };

    const hoverStyle = {
        boxShadow: '0px 0px 300px 5px cyan',
    };

    const fetchRequest = (formData, file) => {
        textQRCodeRef.current.innerText = 'Lendo QR Code...';

        fetch("http://api.qrserver.com/v1/read-qr-code/", {
            method: 'POST',
            body: formData
        })
            .then(res => {
                return res.json();
            })
            .then(result => {
                result = result[0].symbol[0].data;

                textQRCodeRef.current.innerText = result
                    ? 'Selecione um QR Code para leitura'
                    : 'Não foi possível realizar a leitura do QR Code';

                if (!result) {
                    return;
                }

                textQRCodeRef.current.innerText = result;

                if (imgQRCodeRef.current) {
                    imgQRCodeRef.current.src = URL.createObjectURL(file);
                }
            })
            .catch((error) => {
                console.error('Erro durante a requisição:', error);
                textQRCodeRef.current.innerText = 'Não foi possível realizar a leitura do QR Code';
            });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        if (!file) {
            return;
        }

        formData.append('file', file);
        fetchRequest(formData, file);
    };

    const handleFormClick = () => {
        fileInputRef.current.click();
    };

    const handleCopyClick = () => {
        const text = textQRCodeRef.current.textContent;
        navigator.clipboard.writeText(text);
    };

    const cardStyle = {
        heightMin: '300px',
    };

    const textStyle = {
        wordWrap: 'break-word',
        maxWidth: '240px',
    };

    return (
        <>
            <CardTitle />
            <div className="container mt-1">
                <MDBCard
                    className=" m-3 pointer cursor-pointer bg-indigo-600 text-white fw-bolder 
                     d-flex flex-column justify-content-center align-items-center text-center align-content-center align-self-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
                >
                    <form>
                        <input
                            ref={fileInputRef}
                            type="file"
                            name="qr-code-file"
                            className="form-control d-none"
                            onChange={handleFileChange}
                        />
                        <div className=" content mt-4" onClick={handleFormClick}>
                            <i className="fas fa-cloud-upload-alt fa-3x text-info"></i>
                            <p style={textStyle} ref={textQRCodeRef} className=" col mt-2">Selecione um <br />QR Code  para leitura</p>
                        </div>
                    </form>
                </MDBCard>
                <div className="details mt-1">
                    <div className="buttons mt-3 d-flex justify-content-center mb-5">
                        <Button
                            variant="contained"
                            color="secondary"
                            className="opacity-100 fs-6 m-0 shadow-sm mt-1"
                            style={{ ...WolfFont, ...(isHovered1 ? hoverStyle : {}) }}
                            size="small"
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            onClick={handleCopyClick}>
                            <span className="m-0 p-0 text-capitalize">Copiar</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QRScanner;
