import NoteHeader from "./NoteHeader/NoteHeader";
import NoteBody from "./NoteBody/NoteBody";
import "./NoteApp.css";
import { useState } from "react";

function NoteApp() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("NOTES")) || []
  );
  localStorage.setItem("NOTES", JSON.stringify(notes));
  const [sortBy, setSortBy] = useState("latest");

  const addNote = (inputVal) => {
    setNotes((prevNote) => [...prevNote, inputVal]);
  };

  const handleCompleted = (e) => {
    const itemId = Number(e.target.value);
    // const completedItem = notes.map((note) => {
    //     return note.id === itemsId ? { ...note, completed: !note.completed } : note
    // })
    // setNotes(completedItem)

    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        return note.id === itemId
          ? { ...note, completed: !note.completed }
          : note;
      })
    );
  };

  const deleteNote = (noteId) => {
    // const filterNotes = notes.filter((note) => {
    //     return note.id !== noteId
    // })
    // setNotes(filterNotes)

    setNotes((prevNote) => prevNote.filter((note) => note.id !== noteId));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <NoteBody
        addNote={addNote}
        notes={notes}
        handleCompleted={handleCompleted}
        deleteNote={deleteNote}
        sortBy={sortBy}
      />
      <div className="scroll-to-top" onClick={scrollToTop}>
        &uarr;
      </div>
    </>
  );
}

export default NoteApp;
