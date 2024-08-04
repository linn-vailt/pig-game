import React from "react";


interface ControlsProps {
  onRoll: () => void;
  onHold: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onRoll, onHold }) => {
  return (
    <div className="controls">
      <button onClick={onRoll}> Roll dice</button>
      <button onClick={onHold}> Hold</button>
    </div>
  );
};

export default Controls;
