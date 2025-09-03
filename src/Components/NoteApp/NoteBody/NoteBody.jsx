import "./NoteBody.css";
import NewNote from "./NewNote/NewNote";
import NoteList from "./NoteList/noteList";

function NoteBody({ addNote, notes, deleteNote, handleCompleted, sortBy }) {
  return (
    <>
      <div className="note-body">
        <div className="new-note-section">
          <NewNote onAddNote={addNote} />
        </div>

        <div className="note-list-section">
          <NoteList
            notes={notes}
            deleteNote={deleteNote}
            onComplete={handleCompleted}
            sortBy={sortBy}
          />
        </div>
      </div>
    </>
  );
}

export default NoteBody;
