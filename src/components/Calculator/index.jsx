import React, { useState } from 'react';
import Button from '../Button';
import Screen from '../Screen';
import { numbers, operatorSigns } from '../../constants';
import './index.css';

const Calculator = () => {
  const [stack, setStack] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');

  const operators = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '/' : (a, b) => a / b,
    '*' : (a, b) => a * b,
  }

  const addNumber = value => setCurrentNumber(currentNumber+value);

  const enterNumber = () => {
    if(currentNumber === '') return;
    
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

  const clearNumber = () => {
    setStack([]);
    setCurrentNumber('');
  }

  const calcul = operator => {
    if (operator === '+/-') {
      let newCurrentNumber = currentNumber;
      newCurrentNumber = newCurrentNumber.includes('-') ? 
        newCurrentNumber.substr(1) :
        `-${newCurrentNumber}`;

      setCurrentNumber(newCurrentNumber);

      return;
    }

    if (stack[stack.length - 2] === undefined && currentNumber === '') return;

    const newStack = [...stack];
    let lastElement = newStack[newStack.length - 1];
    let beforeLastElement = currentNumber !== '' ? currentNumber : newStack[newStack.length - 2];
    newStack[newStack.length - 1] = operators[operator](parseFloat(beforeLastElement),parseFloat(lastElement)).toString();
    
    if (currentNumber !== '') {
      setCurrentNumber('');
      setStack(newStack);
      return;
    }
    
    newStack.splice(newStack.length - 2, 1);
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
          <Button handleClick={calcul} label="+/-" />
        </div>
        <div className="operators">
          {operatorSigns.map(operator => <Button key={operator} handleClick={calcul} label={operator} />)}
        </div>
      </div>
      <div className="actions">
        <Button label="Enter" handleClick={enterNumber}/>
        <Button label="Drop" handleClick={dropNumber}/>
        <Button label="Swap" handleClick={swapNumber}/>
        <Button label="Clear" handleClick={clearNumber}/>
      </div>
    </div>
  );
}

export default Calculator;
