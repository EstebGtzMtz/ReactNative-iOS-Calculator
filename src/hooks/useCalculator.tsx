import { Operators } from "../interfaces/buttonInterfaces";
import { useRef, useState } from 'react';

export const useCalculator = () => {
  const [baseOperationNumber, setBaseOperationNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');

  const lastOperation = useRef<Operators>()

  const cleanScreen = () => {
    setCurrentNumber('0');
    setBaseOperationNumber('0')
  }

  const buildNumber = (number: string) => {
    if (currentNumber.includes('.') && number === '.') return;

    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      if (number === '.') {
        setCurrentNumber(currentNumber + number)
      } else if (number === '0' && currentNumber.includes('.')) {
        setCurrentNumber(currentNumber + number)
      } else if (number !== '0' && !currentNumber.includes('.')) {
        setCurrentNumber(number)
      } else if (number === '0' && !currentNumber.includes('.')) {
        setCurrentNumber(currentNumber)
      } else {
        setCurrentNumber(currentNumber + number)
      }
    } else {
      setCurrentNumber(currentNumber + number)
    }
  }

  const positiveNegative = () => currentNumber.includes('-') ? setCurrentNumber(currentNumber.replace('-', '')) : setCurrentNumber(`-${currentNumber}`)

  const deletePerCharacter = () => currentNumber.length === 1 ? setCurrentNumber('0') : setCurrentNumber(currentNumber.slice(0, -1))

  const setBaseNumber = () => {
    if (currentNumber.endsWith('.')) {
      setBaseOperationNumber(currentNumber.slice(0, -1))
    } else {
      setBaseOperationNumber(currentNumber);
    }
    setCurrentNumber('0')
  }

  const btnDivide = () => {
    setBaseNumber()
    lastOperation.current = Operators.divide
  }

  const btnMultiply = () => {
    setBaseNumber()
    lastOperation.current = Operators.multiply
  }

  const btnAdd = () => {
    setBaseNumber()
    lastOperation.current = Operators.plus
  }

  const btnRest = () => {
    setBaseNumber()
    lastOperation.current = Operators.rest
  }

  const calculateOperation = () => {
    switch (lastOperation.current) {
      case Operators.plus:
        setCurrentNumber(`${Number(currentNumber) + Number(baseOperationNumber)}`);
        break;
      case Operators.rest:
        setCurrentNumber(`${Number(baseOperationNumber) - Number(currentNumber)}`);
        break;
      case Operators.multiply:
        setCurrentNumber(`${Number(currentNumber) * Number(baseOperationNumber)}`);
        break;
      case Operators.divide:
        setCurrentNumber(`${Number(baseOperationNumber) / Number(currentNumber)}`);
        break;
    }
    setBaseOperationNumber('0')
  }

  return {
    currentNumber,
    baseOperationNumber,
    cleanScreen,
    positiveNegative,
    buildNumber,
    deletePerCharacter,
    btnDivide,
    btnRest,
    btnAdd,
    btnMultiply,
    calculateOperation
  }
}