import React, { useState, useRef } from 'react';
import './App.css';
import Program from './Program.jsx';
import Header from './Header.jsx';

function App() {

  let [numAnswered, setNumAnswered] = useState(0);

  const nextClick = () => {
    setNumAnswered(prevNumAnswered => (prevNumAnswered < 5 ? prevNumAnswered + 1 : prevNumAnswered));
  };

  const prevClick = () => {
    setNumAnswered(prevNumAnswered => (prevNumAnswered > 0 ? prevNumAnswered - 1 : prevNumAnswered));
  };

  return (
    <>
      <div>
        <Header numAnswered={numAnswered} nextClick={nextClick} prevClick={prevClick} /> {/* Passed nextClick function directly */}
        <Program numAnswered={numAnswered} nextClick={nextClick} prevClick={prevClick} /> {/* Passed nextClick function directly */}
      </div>
    </>
  );
}

export default App;
