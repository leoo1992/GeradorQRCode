import { useRef, useState, useCallback, useEffect } from 'react';
import QRCodeLink from 'qrcode';

import CustomTextField from './subComponents/CustomTextField';
import QRCodeCustom from './subComponents/QRCodeCustom';
import CustomButton from './subComponents/CustomButton';
import CustomToast from './subComponents/CustomToast';

function ConversorQRCode() {
  const textQRCodeRef = useRef(null);
  const [link, setLink] = useState('');
  const [qrCodeLink, setQRCodeLink] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showLengthWarning, setShowLengthWarning] = useState(false);
  const generateQRCode = useCallback(async (linkURL) => {
    try {
      const url = await QRCodeLink.toDataURL(linkURL, {
        width: 600,
        margin: 3,
      });
      setQRCodeLink(url);
    } catch (err) {
      return;
    }
  }, []);
  const isDisabled = link === '';
  const handleButtonClick = useCallback(() => {
    if (!isDisabled) {
      setShowToast(true);
      setLink('');
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      const linkElement = document.createElement('a');
      linkElement.href = qrCodeLink;
      linkElement.download = 'qrcode.png';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  }, [isDisabled, qrCodeLink]);

  const handleTextFieldChange = useCallback((event) => {
    const inputText = event.target.value;
    if (inputText.length <= 2000) {
      setLink(inputText);
      setShowLengthWarning(false);
    } else {
      setShowLengthWarning(true);
      setTimeout(() => {
        setShowLengthWarning(false);
      }, 4000);
    }
  }, []);

  useEffect(() => {
    if (link !== '') {
      generateQRCode(link);
      setShowToast(false);
    }
  }, [link, generateQRCode]);

  return (
    <>
      <CustomToast showToast={showToast} />
      <QRCodeCustom value={link} />
      <CustomTextField
        inputRef={textQRCodeRef}
        value={link}
        onChange={handleTextFieldChange}
        onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), handleButtonClick())}
      />
      {showLengthWarning && <div className='text-danger p-0 m-0 fs-6'>* Limite de 2000 caracteres!</div>}
      <CustomButton
        url={qrCodeLink}
        disabled={isDisabled}
        onClick={handleButtonClick}
      />
    </>
  );
}

export default ConversorQRCode;
