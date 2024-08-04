import React, { useState, useEffect } from 'react'
import dice1 from '../assets/dice-1.png';
import dice2 from '../assets/dice-2.png';
import dice3 from '../assets/dice-3.png';
import dice4 from '../assets/dice-4.png';
import dice5 from '../assets/dice-5.png';
import dice6 from '../assets/dice-6.png';

interface DiceProps {
    value: number
}

const Dice: React.FC<DiceProps> = ({ value }) => {
    const [isRolling, setIsRolling] = useState(false);
  
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    useEffect(() => {
      setIsRolling(true);
      const timer = setTimeout(() => setIsRolling(false), 1000);
      return () => clearTimeout(timer);
    }, [value]);
  
    return (
      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        <img src={diceImages[value - 1]} alt={`Dice ${value}`} />
      </div>
    );
  };
  
  export default Dice;