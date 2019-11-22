import React from 'react';
import './index.css';

const Screen = ({ value = "" }) => {
  return <input value={value} disabled/>;
}

export default Screen;