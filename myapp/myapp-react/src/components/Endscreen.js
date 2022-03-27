import React, { useContext } from "react";
import QuizContext from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";
import "../App.css";

const Endscreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restart = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endScreen">
      <h1>Quiz finished</h1>
      <h2>Here's ur score</h2>
      <h3>
        {score} / {Questions.length}{" "}
      </h3>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
};

export default Endscreen;
