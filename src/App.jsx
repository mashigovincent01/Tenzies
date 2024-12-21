import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'
import { nanoid } from "nanoid"

function App() {
  const [numbers, setNumbers] = useState(allNewDice().map((number)=> {
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
  
  return (
    <>
      <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
            {numbers.map((number, index)=> <Die {...number} hold={hold} key={index}/>)}
          </div>
          <button onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
