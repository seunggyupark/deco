import './App.scss';
import React, { useState } from 'react';

import Header from './components/Header';
import Loading from './components/UI/Loading'
import Room from './components/Room';
import ColorSelector from './components/ColorSelector/ColorSelector'

function App() {
  const [ pickedColor, setPickedColor ] = useState("");

  const pickedColorHandler = color => setPickedColor(color);
  const url = "/bedroom.glb";

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="room-container">
          <Room pickedColor={pickedColor} url={url}/>
        </div>
        <ColorSelector pickedColor={pickedColor} pickedColorHandler={pickedColorHandler}/>
      </div>
    </>
  );
}

export default App;
