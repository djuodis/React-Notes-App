import React, { useState } from 'react';
import './App.css';
import Button from './assets/Button';
import Note from './assets/Note';

function App() {
  const [notes, setNotes] = useState([]);

  

  const addNote = () => {
    setNotes([...notes, { id: notes.length }]);
  };

  const removeNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      <Button onClick={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Note key={note.id} index={index} removeFromList={removeNote} />
        ))}
      </div>
    </>
  );
}

export default App;
