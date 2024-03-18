import React from "react";
import AnimatedGif from "./utils/AnimatedGif";
import Tastiera from "./components/Tastiera";

function App() {
  return (
    <>
      <AnimatedGif
        src="https://wallpapercave.com/wp/wp2757874.gif"
        alt="Sfondo"
      />
      <Tastiera />
    </>
  );
}

export default App;
