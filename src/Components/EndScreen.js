import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import Questions from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState, tries, setTries } =
    useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setTries(tries - 1);
    setGameState("menu");
  };
  return (
    <div className="endScreen">
      {score >= 2 ? (
        <div>
          <h1 style={{ color: "green" }}>Complimenti, hai superato il test!</h1>
          <p>
            Risposte corrette: <span style={{ fontWeight: 700 }}>{score}</span>
          </p>
          <p>
            Risposte sbagliate:{" "}
            <span style={{ fontWeight: 700 }}>{3 - score}</span>
          </p>
          <p>
            Percentuale di risposte corrette:{" "}
            <span style={{ fontWeight: 700 }}>
              {((score / 3) * 100).toFixed(2)}%
            </span>
          </p>
        </div>
      ) : tries > 0 ? (
        <div>
          <h1 style={{ color: "red" }}>Purtroppo non hai superato il test.</h1>
          <p>
            Risposte corrette: <span style={{ fontWeight: 700 }}> {score}</span>
          </p>
          <p>
            Risposte sbagliate:{" "}
            <span style={{ fontWeight: 700 }}> {3 - score} </span>{" "}
          </p>
          <p>
            Percentuale di risposte corrette:{" "}
            <span style={{ fontWeight: 700 }}>
              {((score / 3) * 100).toFixed(2)}%
            </span>
          </p>
          <button className="techButton" onClick={restartQuiz}>
            Riprova il test
          </button>
          <h2>
            Tentativi rimasti: <span style={{ color: "red" }}> {tries} </span>
          </h2>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "red" }}>Purtroppo non hai superato il test.</h1>
          <h2>Hai finito i tuoi tentativi. Ci dispiace!</h2>
        </div>
      )}
    </div>
  );
}

export default EndScreen;
