/* eslint-disable react/prop-types */
import QRCode from 'react-qr-code';

const QRCodeCustom = ({ value }) => {
  const purpleBorderStyle = {
    border: '3px solid #3949ab',
  };

  return (
    <QRCode
      value={value}
      size={200}
      style={purpleBorderStyle}
      className='rounded-5 w-auto opacity-100 m-0 mb-4 p-3 bg-body fs-6 text-center d-flex justify-content-center align-content-center align-items-center shadow-sm'
    />
  );
};

export default QRCodeCustom;
