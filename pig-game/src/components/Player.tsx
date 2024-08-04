import React from "react";

interface PlayerProps {
  name: string;
  score: number;
  currentScore: number;
  isActive: boolean;
}

const Player: React.FC<PlayerProps> = ({name, score, currentScore, isActive}) => {
    return (
        <div className={`player ${isActive ? 'active' : ''}`}>
            <h2>{name}</h2>
            <p className='score'>{score}</p>
            <div className='current'>
                <p>Current score</p>
                <p className="current-score">{currentScore}</p>
            </div>
        </div>
    )
}

export default Player 