import { MDBCardTitle, } from 'mdb-react-ui-kit';

function CardTitle() {

    const wolfStyle = {
        color: 'white',
        margin: '0',
        padding: '0',
        fontStyle: 'italic',
        fontWeight: '900px',
        fontSize: '14px',
        textShadow: '2px 2px 3px purple',

    };

    const WolfFont = {
        fontFamily: 'Rock Salt'
    };

    return (
        <MDBCardTitle className='bg-indigo-600 p-2 w-100 mt-3 shadow-sm' style={wolfStyle}>
            <img src="./favicon-16x16.png" alt="Wolf" sizes='16x16' height={16} width={16} className='p-0 m-0' /> <br />
            <div className='p-1 m-0'>
                <span style={WolfFont}>Wolf</span><br />
                <span style={WolfFont}>Generator</span>
            </div>
        </MDBCardTitle>
    )
}

export default CardTitle