import { useState , useContext } from 'react';
import './App.css';
import Mainmenu from './components/Mainmenu';
import Quiz from './components/Quiz';
import Endscreen from './components/Endscreen';

import { QuizContext } from "./Helpers/Context";

function App() {
const [gameState , setGameState] = useState("menu");
const [score , setScore] = useState(0);

  return (
    <div className="App">
      <h2>Quiz App</h2>
    
      <QuizContext.Provider value={{ gameState , setGameState , score , setScore}}> 
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <Endscreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
