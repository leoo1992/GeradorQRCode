import { useRef, useState, useCallback, useEffect } from 'react';
import QRCodeLink from 'qrcode';

//Components
import CustomTextField from './subComponents/CustomTextField';
import QRCodeCustom from './subComponents/QRCodeCustom';
import CustomButton from './subComponents/CustomButton';
import CustomToast from './subComponents/CustomToast';

function InputQRcode() {
  const textQRcodeRef = useRef(null);
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('');
  const [toastShown, setToastShown] = useState(false);

  const generateQrCode = useCallback((link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      if (err) {
        return
      } else {
        setQrCodeLink(url);
      }
    });
  }, []);

  const isDisabled = link === '';

  const showToast = useCallback(() => {
    if (!toastShown) {
      setToastShown(true);
      setLink('');
      setTimeout(() => {
        setToastShown(false);
      }, 1)
    } else {
      return
    }
  }, [toastShown]);

  const handleButtonClick = useCallback(() => {
    if (!isDisabled) {
      showToast();
      const linkElement = document.createElement('a');
      linkElement.href = qrCodeLink;
      linkElement.download = 'qrcode.png';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  }, [isDisabled, showToast, qrCodeLink]);

  useEffect(() => {
    if (link !== '') {
      generateQrCode(link);
      setToastShown(false);
    }
  }, [link, generateQrCode]);

  return (
    // all components are in subComponents
    <>
      <CustomToast showToast={toastShown} />

      <QRCodeCustom value={link} />

      <CustomTextField
        inputRef={textQRcodeRef}
        value={link}
        onChange={(event) => setLink(event.target.value)}
        onKeyDown={(event) => (event.key === 'Enter' ? (event.preventDefault(), handleButtonClick()) : null)}
      />

      <CustomButton
        url={qrCodeLink}
        disabled={isDisabled}
        onClick={handleButtonClick}
      />
    </>
  )
}

export default InputQRcode
