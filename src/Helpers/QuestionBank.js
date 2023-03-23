import { useState, useCallback } from "react";

const questionsArray = [
  {
    prompt: "Qual è la capitale dell'Italia?",
    optionA: "Roma",
    optionB: "Tokyo",
    optionC: "Toronto",
    optionD: "Luang Prabang",
    answer: "A",
  },
  {
    prompt: "A quanti anni corrisponde un lustro?",
    optionA: "7",
    optionB: "5",
    optionC: "10",
    optionD: "100",
    answer: "B",
  },
  {
    prompt: "Chi ha scritto la Divina Commedia?",
    optionA: "Ludovico Ariosto",
    optionB: "Pietro Bembo",
    optionC: "Dante Alighieri",
    optionD: "Alessandro Manzoni",
    answer: "C",
  },
  {
    prompt: "Qual è la durata di una partita di calcio?",
    optionA: "90 minuti",
    optionB: "45 minuti",
    optionC: "120 minuti",
    optionD: "95 minuti",
    answer: "A",
  },
  {
    prompt: "Qual è il fiume più lungo d'Italia?",
    optionA: "Po",
    optionB: "Arno",
    optionC: "Adige",
    optionD: "Tevere",
    answer: "A",
  },
  {
    prompt: "Qual è il paese d'origine dei Beatles?",
    optionA: "USA",
    optionB: "Canada",
    optionC: "Australia",
    optionD: "Regno Unito",
    answer: "D",
  },
  {
    prompt: "Dove si trova la Mole Antonelliana?",
    optionA: "Padova",
    optionB: "Torino",
    optionC: "Reggio Emilia",
    optionD: "Milano",
    answer: "B",
  },
  {
    prompt: "Qual era il mestiere di Federico Fellini?",
    optionA: "Falegname",
    optionB: "Musicista",
    optionC: "Scenografo",
    optionD: "Regista",
    answer: "D",
  },
  {
    prompt: "In quale continente scorre il fiume Ob?",
    optionA: "Asia",
    optionB: "Europa",
    optionC: "Africa",
    optionD: "America",
    answer: "A",
  },
  {
    prompt: "Quanti colori ci sono nell'arcobaleno?",
    optionA: "5",
    optionB: "7",
    optionC: "10",
    optionD: "100",
    answer: "B",
  },
];

function getRandomItems(arr, n) {
  const shuffledArray = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, n);
}

function useRandomObjects() {
  const [Questions, setRandomQuestions] = useState(() =>
    getRandomItems(questionsArray, 3)
  );

  const updateRandomObjects = useCallback(() => {
    setRandomQuestions(getRandomItems(questionsArray, 3));
  }, []);

  return [Questions, setRandomQuestions];
}

export default useRandomObjects;
