
import {MDBCardBody} from 'mdb-react-ui-kit';

import ConversorQRCode from "../../ConversorQRCode/ConversorQRCode"
function CardBody() {
    return (
        <MDBCardBody className='d-flex flex-column justify-content-center align-items-center align-content-center m-0 p-0 w-auto'>
            <ConversorQRCode />
        </MDBCardBody>
    )
}

export default CardBody