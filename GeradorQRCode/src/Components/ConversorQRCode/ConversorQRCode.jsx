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
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isDownloadDisabled, setDownloadDisabled] = useState(false);
  const [isTextFieldDisabled, setTextFieldDisabled] = useState(false);

  const hoverStyle = {
    boxShadow: '0px 0px 300px 5px cyan',
  };

  const generateQRCode = useCallback(async (linkURL) => {
    try {
      const url = await QRCodeLink.toDataURL(linkURL, {
        width: 600,
        margin: 3,
      });
      setQRCodeLink(url);
      return url;
    } catch (err) {
      return null;
    }
  }, []);

  const handleButtonClick = useCallback(async () => {
    if (!isDownloadDisabled) {
      setDownloadDisabled(true);
      setTextFieldDisabled(true);

      const qrCodeUrl = await generateQRCode(link);

      if (qrCodeUrl) {
        const linkElement = document.createElement('a');
        linkElement.href = qrCodeUrl;
        linkElement.download = 'qrcode.png';
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);

        await new Promise(resolve => setTimeout(resolve, 1000));

        setShowToast(true);
        setLink('');

        setTimeout(() => {
          setShowToast(false);
          setDownloadDisabled(false);
          setTextFieldDisabled(false);
        }, 3000);
      }
    }
  }, [isDownloadDisabled, link, generateQRCode]);

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
    setDownloadDisabled(link === '');
  }, [link, generateQRCode]);

  return (
    <>
      <CustomToast showToast={showToast} />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ...(isHovered ? hoverStyle : {}) }}
        className='mt-3 mb-3 bg-white rounded-5 border-0 '>
        <QRCodeCustom value={link} />
      </div>
      <div
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        style={{ ...(isHovered1 ? hoverStyle : {}) }}>
        <CustomTextField
          inputRef={textQRCodeRef}
          value={link}
          onChange={handleTextFieldChange}
          onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), handleButtonClick())}
          disabled={isTextFieldDisabled}
        />
      </div>
      {showLengthWarning && <div className='text-danger p-0 m-0 fs-6'>* Limite de 2000 caracteres!</div>}
      <CustomButton
        url={qrCodeLink}
        disabled={isDownloadDisabled}
        onClick={handleButtonClick}
      />
    </>
  );
}

export default ConversorQRCode;