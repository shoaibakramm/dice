import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dice from './Dice';


function App() {
  
  const [dice1,setDice1] = useState(6);
  const [dice2,setDice2] = useState(6);
  const [hasRolled,setHasRolled] = useState(false);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
    setHasRolled(true);
  };

  let title_text = "CLick on the dice to roll";

  if(hasRolled)
  {
    if(dice1>dice2)
    {
      title_text = "player 1 won the game 🚩";
    }
    else if (dice2>dice1)
    {
      title_text = "player 2 won the game 🚩";
    }
    else
    {
      title_text = "Draw!"
    }
  }


  //------------------------------------------------------

  return (

    <div className='container'>
      <h1> {title_text} </h1>

      <Dice  playerNumber={1} diceNumber={dice1} onRoll={rollDice}  />
      <Dice  playerNumber={2} diceNumber={dice2} onRoll={rollDice}  />


      <footer>
        MADE by Shoaib Akram
      </footer>
    
    </div>
  );

}

export default App
