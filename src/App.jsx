import { useState } from 'react';
import "./App.css";
import DigitalClock from './components/DigitalClock';
import Countdown from './components/Countdown/Countdown';
import Stopwatch from './components/Stopwatch/Stopwatch'

function App() {

  return (
    <>
      <DigitalClock/>
      <Countdown/>
      <Stopwatch/>
    </>
  )
};

export default App;
