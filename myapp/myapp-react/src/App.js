import React, { useState } from "react";
import "./App.css";
import MainMenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import Endscreen from "./components/Endscreen";
import QuizContext from "./Helpers/Context";

function App() {
  const [gamestate, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gamestate, setGameState, score, setScore }}
      >
        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endscreen" && <Endscreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
