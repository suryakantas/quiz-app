import React,{useContext} from 'react';
import { Questions } from "../Helpers/Questionbank";
import { QuizContext } from "../Helpers/Context"; 

export default function Endscreen() {
  const { score , setScore, setGameState } = useContext(QuizContext);

const restatrQuiz = () => {
  setGameState("menu");
  setScore(0);
}

  return (
    <div className='container'>
      <h1>Quiz End</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restatrQuiz}>Restart Quiz</button>
    </div>
  )
}
