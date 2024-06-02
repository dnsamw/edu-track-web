import React, { useState } from 'react';
import '../../Customs.css'

type Props ={}

function EscapeButton({props}:any) {
  const [isEscaping, setIsEscaping] = useState(false);

  const handleMouseEnter = () => {
    setIsEscaping(true);
  };

  const handleMouseLeave = () => {
    setIsEscaping(false);
  };

  return (
    <button
      className={`rounded-full bg-gray-50 px-16 py-4 text-2xl border  hover:bg-gray-300 escape-button ${isEscaping ? 'escaping' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props} // Spread other button props
    >
      {/* {props.children} */}TEST
    </button>
  );
}

export default EscapeButton;
