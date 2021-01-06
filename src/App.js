import './App.scss';
import React, { useState } from 'react';

import Header from './components/Header';
import Room from './components/Room';
import ColorSelector from './components/ColorSelector/ColorSelector'

function App() {
  const [ pickedColor, setPickedColor ] = useState("");

  const pickedColorHandler = color => setPickedColor(color);

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="room-container">
          <Room pickedColor={pickedColor}/>
        </div>
        <ColorSelector pickedColor={pickedColor} pickedColorHandler={pickedColorHandler}/>
      </div>
    </>
  );
}

export default App;
