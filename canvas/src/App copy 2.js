import React, { useState, useEffect } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

import { useInterval } from "./hooks/useInterval";

const ThemeContext = React.createContext("red");

const ThemedRect = ({ posX }) => {
  //notice function has access to ThemeContext.  This is because it is wrapped in the provider.
  // useContext will go up react tree to nearest Provider.
  const value = React.useContext(ThemeContext);
  return (
    <Rect
      x={posX}
      y={50}
      width={100}
      height={100}
      fill={value}
      shadowBlur={10}
    />
  );
};

const ColoredRect = () => {
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Layer>
    <Text text="Try click on rect" />
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
    </Layer>
  );
};

const Canvas = ({ posX }) => {
  return (
    <ThemeContext.Consumer>
      {/* Stage is constructor used for multiple layers from Konva */}
      {value => (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <ThemeContext.Provider value={value}>
            
              
            <ColoredRect />
            
            <Layer>
              <ThemedRect posX={posX} />
            </Layer>
          </ThemeContext.Provider>
        </Stage>
      )}
    </ThemeContext.Consumer>
  );
};

const App = () => {
  const fps = 30;
  const initTime = 0;

  const [time, setTime] = useState(initTime);
  const [speed, setSpeed] = useState(1000 / fps);

  const [posX, setPosX] = useState(0);

  useInterval(() => {
    setTime(time + 1);
    setPosX(posX + 1);
  }, [speed]);
  useEffect(() =>{
    if(time/60>12.99){
      setTime(0)
    }
  })
  // console.log(time/60)

  return (
    <ThemeContext.Provider value="blue">
      <Canvas posX={posX} />
    </ThemeContext.Provider>
  );
};
export default App;
