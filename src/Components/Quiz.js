import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import useRandomObjects from "../Helpers/QuestionBank";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [Questions, setRandomQuestions] = useRandomObjects();
  const [buttonClasses, setButtonClasses] = useState([
    "initial",
    "initial",
    "initial",
    "initial",
  ]);
  const [animationKey, setAnimationKey] = useState(0);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
    setButtonClasses(["initial", "initial", "initial", "initial"]);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
    setButtonClasses(["initial", "initial", "initial", "initial"]);
  };

  const handleButtonClick = (index, chosenOption) => {
    setOptionChosen(chosenOption);
    if (buttonClasses[index] === "initial") {
      const newButtonClasses = [...buttonClasses];
      newButtonClasses[index] = "clicked";
      setButtonClasses(newButtonClasses);
    }
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          key={`button-0-${animationKey}`}
          className={`quizButton button-0 ${buttonClasses[0]}`}
          onClick={() => handleButtonClick(0, "A")}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          key={`button-1-${animationKey}`}
          className={`quizButton button-1 ${buttonClasses[1]}`}
          onClick={() => handleButtonClick(1, "B")}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          key={`button-2-${animationKey}`}
          className={`quizButton button-2 ${buttonClasses[2]}`}
          onClick={() => handleButtonClick(2, "C")}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          key={`button-3-${animationKey}`}
          className={`quizButton button-3 ${buttonClasses[3]}`}
          onClick={() => handleButtonClick(3, "D")}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button className="techButton" onClick={finishQuiz}>
          {" "}
          Calcola il risultato...{" "}
        </button>
      ) : (
        <button className="techButton" onClick={nextQuestion}>
          {" "}
          <span>Prossima domanda</span>
        </button>
      )}
    </div>
  );
}

export default Quiz;
