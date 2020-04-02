
export const startGame = () => {
    setGameOver(false);
    setSpeed(1000 / fps);
    setTicks(0);
    setHour(12.0);
    setMinutes(0);
    console.log("start game");
  };