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

  const swapNumber = () => {
    if (stack[stack.length - 2] === undefined) return;

    const newStack = [...stack];
    let tmp = newStack[newStack.length -2];
    newStack[newStack.length - 2] = newStack[newStack.length - 1];
    newStack[newStack.length - 1] = tmp;
    setStack(newStack);
  };

  const dropNumber = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  }

  return (
    <div className="calculator">
      <div className="screen">
        <Screen value={stack[stack.length-2]} />
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
      </div>
      <div className="operators">
        <Button label="Enter" handleClick={enterNumber}/>
        <Button label="Drop" handleClick={dropNumber}/>
        <Button label="Swap" handleClick={swapNumber}/>
      </div>
    </div>
  );
}

export default Calculator;
