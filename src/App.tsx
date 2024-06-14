import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCounter } from './useCounter/useCounter';

function App() {
  const countingTime = useCounter(); 
  return (
    <><p>
      {countingTime}
    </p>
    </>
  );
}
export default App;
