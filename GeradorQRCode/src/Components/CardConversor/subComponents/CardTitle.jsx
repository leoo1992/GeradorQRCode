import { useState } from 'react';
import { MDBCardTitle } from 'mdb-react-ui-kit';

function CardTitle() {
    const [isHovered, setIsHovered] = useState(false);
    const wolfStyle = {
        color: 'white',
        margin: '0',
        padding: '0',
        fontStyle: 'italic',
        fontWeight: '900px',
        fontSize: '14px',
        textShadow: '2px 2px 3px purple',
        transition: 'box-shadow 0.3s ease',
    };

    const WolfFont = {
        fontFamily: 'Rock Salt',
    };

    const hoverStyle = {
        boxShadow: '0px 0px 1000px 0px cyan', 
    };

    return (
        <MDBCardTitle
            className='bg-indigo-600 p-2 w-100 mt-3'
            style={{ ...wolfStyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src="./favicon-16x16.png"
                alt="Wolf"
                sizes='16x16'
                height={16}
                width={16}
                className='p-0 m-0'
            />{' '}
            <br />
            <div className='p-1 m-0'>
                <span style={WolfFont}>Wolf</span>
                <br />
                <span style={WolfFont}>Generator</span>
            </div>
        </MDBCardTitle>
    );
}

export default CardTitle;
