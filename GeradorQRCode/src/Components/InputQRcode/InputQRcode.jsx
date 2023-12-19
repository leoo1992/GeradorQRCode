import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardTwoToneIcon from '@mui/icons-material/KeyboardTwoTone';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/system';
import QRCode from 'react-qr-code';

const StyledKeyboardTwoToneIcon = styled(KeyboardTwoToneIcon)({
  cursor: 'pointer',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: 'black'
  },
});

function InputQRcode() {
  const textQRcodeRef = useRef(null);
  const [link, setLink] = useState('');

  const handleIconClick = () => {
    if (textQRcodeRef.current) {
      textQRcodeRef.current.focus();
    }
  };

  return (
    <>
      <QRCode
        value={link}
      />

      <TextField
        inputRef={textQRcodeRef}
        id="textQRcode"
        label="Digite um texto"
        placeholder='Digite um texto...'
        multiline
        style={{ cursor: 'pointer' }}
        maxRows={6}
        value={link}
        onChange={(event) => {
          setLink(event.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ cursor: 'pointer' }}
              onClick={handleIconClick}
            >
              <StyledKeyboardTwoToneIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />

    </>
  )
}

export default InputQRcode
