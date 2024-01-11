import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className="add__button">
      <button id="add" onClick={onClick}>
        +Add Note
      </button>
    </div>
  );
};

export default Button;
