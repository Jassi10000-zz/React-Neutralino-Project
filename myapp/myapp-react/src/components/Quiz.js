import React, { useState, useContext } from "react";
import QuizContext from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQues, setCurrQues] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQues = () => {
    if (Questions[currQues].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQues(currQues + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQues].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endscreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQues].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQues].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQues].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQues].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQues].optionD}
        </button>
      </div>

      {currQues === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz </button>
      ) : (
        <button onClick={nextQues}>Next Question </button>
      )}
    </div>
  );
};

export default Quiz;
