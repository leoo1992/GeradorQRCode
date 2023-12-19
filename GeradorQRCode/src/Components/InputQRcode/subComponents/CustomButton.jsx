/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import { styled } from '@mui/material/styles';

const RotatingDownloadingRoundedIcon = styled(DownloadingRoundedIcon)({
    animation: 'rotation 2s infinite linear',
    '@keyframes rotation': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
    },
});

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const CustomButton = ({ url, disabled, onClick }) => {
    return (
        <a
            href={url}
            download="qrcode.png"
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        >
            <Button
                component="label"
                variant="outlined"
                startIcon={<RotatingDownloadingRoundedIcon />}
                className="fs-6 text-secondary border-secondary m-0"
                style={{ width: 200 }}
                disabled={disabled}
                onClick={onClick}
            >
                <span className="m-0 p-0 text-capitalize">Download QRcode</span>
                <VisuallyHiddenInput disabled={disabled} />
            </Button>
        </a>
    )
}

export default CustomButton