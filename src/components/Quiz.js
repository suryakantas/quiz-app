import React, { useState , useContext} from 'react'
import { Questions } from "../Helpers/Questionbank";
import { QuizContext } from "../Helpers/Context"; 

function Quiz() {
  const { score , setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [optionChosen , setOptionChosen] = useState("");

  const nextQuetion = () =>{
    if(Questions[currentQuestion].answer == optionChosen){
      setScore(score+1);
    }
    setCurrentQuestion(currentQuestion +1);
  }

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer == optionChosen){
      setScore(score+1);
    }
    setGameState('endscreen');
  }

  return (
    <div className='container'>
      <h2>{Questions[currentQuestion].prompt}</h2>
      <div className='container'>
        <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
      </div>
      {currentQuestion == Questions.length - 1 ?
      <button onClick={finishQuiz}>Finish Quiz</button> :
      <button onClick={nextQuetion}>Next Question</button>
      }
      
    </div>
  )
}

export default Quiz