import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.scss";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <h1>Benvenuto nel test di fine modulo.</h1>
      <h3>Clicca il pulsante inizia per cominciare.</h3>
      <button
        className="techButton"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        <span>Inizia</span>
      </button>
      <p>
        Per superare il test devi rispondere correttamente ad almeno 2 domande
        su 3.
      </p>
    </div>
  );
}

export default MainMenu;
