import { useState } from "react";

function App() {

  // hover:scale-110 hover:bg-indigo-700 hover:rounded-lg hover:text-pink-300

  // [...Array(9)]
  const tickTackToe =  [...Array(9)]
  
  const [values, setValues] = useState(tickTackToe)
  const [turn, setTurn] = useState(true)

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

    if(turn) {
      values[index] = 'X'
    }else {
      values[index] = 'O'
    }
    
    setTurn(!turn)
    target.innerText = values[index]
    setValues(values)
  }

  return (
    <div className="container">
      {/* <h1 className="turn-header">{turn ? 'X': 'O'}</h1> */}
      <div className="game-board">
        {values.map((value, index)=>(
          <span className={`board-piece ${index%2 === 0 ? 'hakan' : null }`} key={index} onClick={(e) => {handleClick(e,index)}} sign={turn ? 'X': 'O'}>{value}</span>
        ))}
        <input type="checkbox" name="" id="deneme" />
        <div className="line"></div>
      </div>
    </div>
  )
}

export default App;
