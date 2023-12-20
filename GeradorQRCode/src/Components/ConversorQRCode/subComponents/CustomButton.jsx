/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 0,
    display: 'none',
});

const CustomButton = ({ url, disabled, onClick }) => {
    const buttonClassName = disabled ? 'disabled text-secondary' : 'bg-purple-600';

    const buttonStyle = {
        pointerEvents: disabled ? 'none' : 'auto',
        width: 200,
    };

    const WolfFont = {
        fontFamily: 'Alkatra'
    };


    const purpleBorderStyle = {
        border: '2px solid #3949ab',
    };

    return (
        <div className='p-0 m-0 mt-3 rounded-5' style={purpleBorderStyle} id='downloadDiv'>
            <form formNoValidate  autoComplete='off' id='downloadForm' name='downloadForm' data-nosnippet>
                <a href={url} download="qrcode.png" style={buttonStyle} id='downloadLink' name='downloadLink'>
                    <Button
                        component="label"
                        variant="contained"
                        color="secondary"
                        startIcon={<DownloadingRoundedIcon />}
                        className={`opacity-100 fs-6 m-0 ${buttonClassName} shadow-sm`}
                        disabled={disabled}
                        onClick={onClick}
                        style={WolfFont}
                        id='downloadButton'
                        autoComplete='off'
                    >
                        <span className="m-0 p-0 text-capitalize">Download QRcode</span>
                        <VisuallyHiddenInput
                            disabled={disabled}
                            name="qrCodeFile"
                            id='qrCodeFile'
                            formNoValidate 
                            data-nosnippet
                            autoComplete='off'
                            hidden
                            readOnly
                            form="downloadForm"
                        />
                    </Button>
                </a>
            </form>
        </div >
    );
};

export default CustomButton;
