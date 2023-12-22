/* eslint-disable react/prop-types */
import { MDBCard } from 'mdb-react-ui-kit';
import QRCode from 'react-qr-code';

const QRCodeCustom = ({ value }) => {
  const purpleBorderStyle = {
    border: '3px solid #3949ab',
  };

  return (
    <div className='bg-transparent shadow-sm p-0 m-0'>
      <MDBCard className='m-0 p-0 h-auto w-auto bg-transparent'>
        <QRCode
          value={value}
          size={200}
          style={purpleBorderStyle}
          className='rounded-5 w-auto opacity-100 m-0 p-3 bg-transparent fs-6 text-center d-flex justify-content-center align-content-center align-items-center shadow-sm'
        />
      </MDBCard>
    </div>
  );
};

export default QRCodeCustom;
