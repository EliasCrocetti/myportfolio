import React, { useState } from 'react';
import { RiFileCopy2Line } from 'react-icons/ri';

const CopyToClipboard = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <div className="copy-icon" onClick={handleCopyClick}>
      <span style={{ fontSize: '50px', cursor: 'pointer' }}> <RiFileCopy2Line /> </span>
      {isCopied && <span className="copy-message">Text copied!</span>}
    </div>
  );
};

export default CopyToClipboard;
