import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'


function App() {
  const [numbers, setNumbers] = useState(()=>allNewDice().map((number)=> {
    return {
      value: number,
      isHeld: false,
      id: nanoid()
    }
  }))
  function allNewDice(){
    return new Array(10).fill(0).map(()=> Math.ceil(Math.random()*6))
  }

  function rollDice(){
    setNumbers((oldNumbers) =>
      oldNumbers.map((die, index) => ({
        ...die,
        value: die.isHeld ? die.value : Math.ceil(Math.random() * 6),
      }))
    );
  }

  function hold(id){
    setNumbers((oldNumbers)=> oldNumbers.map((number)=>{
      return{
        ...number,
        isHeld : number.id === id ? !number.isHeld : number.isHeld
      }
    }))
  }
  const gameWon = numbers.every(number=>number.isHeld) && numbers.every(number=>number.value === numbers[0].value)
  
  return (
    <>
      <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
            {numbers.map((number, index)=> <Die {...number} hold={hold} key={index}/>)}
          </div>
          <button onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
