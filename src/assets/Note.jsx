import React from "react";
const Note = () => {
  return (
    <div className="notes">
      <div className="note">
        <div className="buttons">
          <button className="edit">
            <i className="fa-solid fa-edit"></i>
          </button>
          <button className="delete">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
