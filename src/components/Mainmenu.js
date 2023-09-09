import React, {useContext} from 'react';
import { QuizContext } from "../Helpers/Context";

export default function Mainmenu() {
    const { gameState , setGameState } = useContext(QuizContext);
  return (
    <div className='container'>
        <button onClick={() => {
            setGameState('quiz')
        }}>Start Quiz</button>
    </div>
  )
}
