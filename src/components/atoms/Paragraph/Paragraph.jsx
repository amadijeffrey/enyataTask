import React from 'react';
import './Paragraph.scss';

const Paragraph = ({ textProps, children }) => {
  let color = '#303b54'; 
  let size = '14px'; 
  let weight = 400;

  const splitTextprops = (textProps) => {
    const finalValue = textProps.split("-");
    color = finalValue[0];
    size = finalValue[1] + 'px';
    weight = parseInt(finalValue[2]);
  };

  if (textProps) {
    splitTextprops(textProps);
  }

  return (
    <p className={`paragraph-component`} style={{ color, fontSize: size, fontWeight: weight }}>
      {children}
    </p>
  );
};

export default Paragraph;
