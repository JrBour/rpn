import React from 'react';
import './index.css';

const operators = ['Enter', 'Drop', 'Swap', 'Clear'];

const Button = ({ label, handleClick }) => {
  return (
    <button className={operators.includes(label) ? 'operator': ''} onClick={() => handleClick(label)}>{label}</button>
  )
}

export default Button;