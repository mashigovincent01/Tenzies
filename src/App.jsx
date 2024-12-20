import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'

function App() {
  const [numbers, setNumbers] = useState(allNewDice)
  function allNewDice(){
    return new Array(10).fill(0).map(()=> Math.ceil(Math.random()*6))
}
console.log(allNewDice())
  return (
    <>
      <main>
          <div className="dice-container">
            {numbers.map((number)=> <Die value={number}/>)}
          </div>
          <button>Roll Dice</button>
      </main>
    </>
  )
}

export default App
