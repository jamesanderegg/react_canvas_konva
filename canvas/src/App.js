import React, { useState, useEffect } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

import { StyledGameWrapper, StyledGame } from "./styles/StyledGame";
import { StyledSpeedToolbar } from "./styles/StyledSpeedToolBar";

import StartButton from "./Components/StartButton";
import SpeedToolbar from "./Components/SpeedToolbar";

import { useInterval } from "./hooks/useInterval";

// import './App.css'

const App = () => {
  const [fps, setFps] = useState(30);
  const [gameOver, setGameOver] = useState(true);
  const [speed, setSpeed] = useState(null);
  const [ticks, setTicks] = useState(null);
  const [hour, setHour] = useState(null);
  const [minutes, setMinutes] = useState(null);
  // const [pause, setPause] = useState(false);

  const startGame = () => {
    setGameOver(false);
    setSpeed(1000 / fps);
    setTicks(0);
    setHour(12.0);
    setMinutes(0);
    console.log("start game");
  };
  const pause = () => {
    console.log('pause')
    setSpeed(null);
  };
  const play = () => {
    console.log('play')
    setSpeed(1000 / fps);
  };
  const speedUp = () => {
    console.log('speedUp')
    setSpeed(1000 / fps - 17);
  };
  const tick = () => {
    if (ticks % 25 === 0) {
      setMinutes(minutes + 15);
    }
    if (minutes > 45) {
      setMinutes(0);
      if (hour < 12) {
        setHour(hour + 1);
      } else {
        setHour(1);
      }
    }
    setTicks(ticks + 1);
    //build button logic
    // setSpeed(1000 / fps);

    //check logic gameOver or not?
  };

  useInterval(() => {
    tick();
  }, speed);

  return (
    <StyledGameWrapper>
      <StyledGame>
        {gameOver ? (
          <StartButton callback={startGame} />
        ) : (
          <>
           <SpeedToolbar play={play} pause={pause} speedUp={speedUp}/>
            <Stage width={1000} height={500}>
              <Layer>
                <Text text={hour + ":" + minutes} />
              </Layer>
              <Layer>
                <Text y={20} text={ticks} />
              </Layer>
            </Stage>
          </>
        )}
      </StyledGame>
    </StyledGameWrapper>
  );
};
export default App;
