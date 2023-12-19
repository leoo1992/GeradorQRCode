/* eslint-disable react/prop-types */
import QRCode from 'react-qr-code';

const QRCodeCustom = ({value}) => {
    return (
        <QRCode value={value}
            size={250} style={{ borderRadius: '5%' }} className='w-auto m-0 p-0 fs-6 text-center d-flex justify-content-center align-content-center align-items-center'
        />
    )
}

export default QRCodeCustom
