import React, { useState } from 'react';
import Button from '../Button';
import Screen from '../Screen';
import './index.css';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operations = ['+', '-', '/', '*', '+/-'];

const Calculator = () => {
  const [stack, setStack] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');

  const addNumber = value => setCurrentNumber(currentNumber+value);
  const enterNumber = () => {
    setStack([...stack, currentNumber]);
    setCurrentNumber('');
  }
  
  return (
    <div className="calculator">
      <div className="screen">
        <Screen value={stack[stack.length-2]}/>
        <Screen value={stack[stack.length-1]} />
        <Screen value={currentNumber} />
      </div>
      <div className="buttons">
        <div className="numbers">
          {numbers.map(number => <Button key={number} handleClick={addNumber} label={number} />)}
        </div>
        <div className="operations">
          {operations.map(operation => <Button key={operation} handleClick={addNumber} label={operation} />)}
        </div>
        <Button label="Enter" handleClick={enterNumber}/>
      </div>
    </div>
  );
}

export default Calculator;
