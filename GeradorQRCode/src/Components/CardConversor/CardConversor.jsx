import { useState } from 'react';
import { MDBCard } from 'mdb-react-ui-kit';
import CardTitle from './subComponents/CardTitle';
import CardBody from './subComponents/CardBody';
import ThemeSwitch from './subComponents/ThemeSwitch';

function CardConversor() {
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);

    const cardStyle = {
        width: '315px',
    };

    return (
        <MDBCard
            className={`m-0 p-0 d-flex text-center shadow-lg opacity-85 ${!isSwitchChecked ? 'bg-purple-900' : ''}`}
            style={cardStyle}>
            <div className='text-end d-flex justify-content-end align-content-end align-items-end m-0 p-0'>
                <ThemeSwitch className='m-0 p-0' onSwitchChange={(checked) => setIsSwitchChecked(!checked)} />
            </div>
            <CardTitle />
            <CardBody />
        </MDBCard>
    );
}

export default CardConversor;
