import React, { useState } from "react";

const Note = ({ index, removeFromList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("New note...");

  const handleClick = () => {
    removeFromList(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="note">
      <div className="buttons">
        <button className="remove" onClick={handleEditClick}>
          <i className="fa-solid fa-edit"></i>
        </button>
        <button className="delete" onClick={handleClick}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="content">
        {isEditing ? (
          <>
            <textarea
              value={editedContent}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows="5"
            />
            <button onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <p>{editedContent}</p>
        )}
      </div>
    </div>
  );
};

export default Note;
