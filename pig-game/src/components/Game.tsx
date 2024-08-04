import React, { useState, useEffect } from "react";
import Player from "./Player";
import Dice from "./Dice";
import Controls from "./Controls";

interface GameState {
  scores: [number, number];
  currentScore: number;
  activePlayer: 0 | 1;
  diceValue: number;
  isPlaying: boolean;
}

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    scores: [0, 0],
    currentScore: 0,
    activePlayer: 0,
    diceValue: 1,
    isPlaying: true,
  });

  const rollDice = () => {
    if (!gameState.isPlaying) return;

    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setGameState((prevState) => ({
      ...prevState,
      diceValue: newDiceValue,
      currentScore:
        newDiceValue === 1 ? 0 : prevState.currentScore + newDiceValue,
      activePlayer:
        newDiceValue === 1
          ? prevState.activePlayer === 0
            ? 1
            : 0
          : prevState.activePlayer,
    }));
  };

  const holdScore = () => {
    if (!gameState.isPlaying) return;

    setGameState((prevState) => {
      const newScores = [...prevState.scores];
      newScores[prevState.activePlayer] += prevState.currentScore;

      return {
        ...prevState,
        scores: newScores as [number, number],
        currentScore: 0,
        activePlayer: prevState.activePlayer === 0 ? 1 : 0,
      };
    });
  };

  useEffect(() => {
    if (gameState.scores[0] >= 100 || gameState.scores[1] >= 100) {
      setGameState((prevState) => ({ ...prevState, isPlaying: false }));
    }
  }, [gameState.scores]);

  return (
    <div className="game">
      <Player
        name="Rekbach"
        score={gameState.scores[0]}
        currentScore={gameState.activePlayer === 0 ? gameState.currentScore : 0}
        isActive={gameState.activePlayer === 0}
      />
      <Player
        name="Kakarutza"
        score={gameState.scores[1]}
        currentScore={gameState.activePlayer === 1 ? gameState.currentScore : 0}
        isActive={gameState.activePlayer === 1}
      />
      <Dice value={gameState.diceValue} />
      <Controls onRoll={rollDice} onHold={holdScore} />
    </div>
  );
};

export default Game;
