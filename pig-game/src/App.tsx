import React from 'react'
import Game from './components/Game'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pig Game</h1>
      <Game />
    </div>
  )
}

export default App