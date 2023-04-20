import { useState } from "react";

function App() {

  // hover:scale-110 hover:bg-indigo-700 hover:rounded-lg hover:text-pink-300

  // [...Array(9)]
  const ticTacToe =  [...Array(9)]
  const [values, setValues] = useState(ticTacToe)
  const [turn, setTurn] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)

  const winnerPoints = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ]

  const handleClick = ({target}, index) => {
    values[index] = turn ? 'X' : 'O'

    setTurn(!turn)
    target.innerText = values[index]
    setValues(values)
    isGameFinished(values[index])
  }

  const isGameFinished = (sign) => {
    const points = values
        .map((val, index) => val === sign ? index : -1)
        .filter(val => val !== -1)

    for (const winnerPoint of winnerPoints) {
      const intersection = winnerPoint.filter(val => points.includes(val))

      if (intersection.length === 3) {
        alert(`${sign} OYUNU KAZANDI`)
        setIsGameOver(true)
      }
    }

    console.log({
      SIGN: sign,
      values, points
    })
  }

  const playAgain = () => {
    setIsGameOver(false)
    setTurn(true)
    setValues(ticTacToe)
  }

  return (
    <div className="container">
      {isGameOver && <button className="btn" onClick={playAgain}>Play Again</button>}
      <div className="game-board">
        {values.map((value, index)=>(
          <span className={`board-piece ${typeof values[index] === 'string' || isGameOver ? 'hakan' : null }`} key={index} onClick={(e) => {handleClick(e,index)}} sign={turn ? 'X': 'O'}>{value}</span>
        ))}
        {/*<input type="checkbox" name="" id="deneme" />*/}
        <div className="line"></div>
      </div>
    </div>
  )
}

export default App;
