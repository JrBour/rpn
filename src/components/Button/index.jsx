import React from 'react';
import './index.css';
import { actions, operatorSigns } from '../../constants';

const Button = ({ label, handleClick }) => {
  const getClass = label => {
    if (actions.includes(label)) {
      return 'action';
    } else if(operatorSigns.includes(label)) {
      return 'operator';
    } else {
      return 'number';
    }
  }

  return (
    <button className={getClass(label)} onClick={() => handleClick(label)}>{label}</button>
  )
}

export default Button;