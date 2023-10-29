import React from "react";
import Message from "../../../Message/Message";

function NoteItemHeader({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed === true).length;
  const unCompletedNotes = notes.filter(
    (note) => note.completed === false
  ).length;
  // or unCompletedNotes = allNotes - completedNotes ;

  if (!allNotes)
    return (
      <Message>
        <h4 style={{ textAlign: "center", color: "#c6c8ca" }}>
          No Notes has already been added{" "}
        </h4>
      </Message>
    );

  // <h2 style={{ textAlign:'center'}}>No Notes has already been added </h2>

  return (
    <>
      <div className="note-list-header">
        <p>
          all
          <span className="badge badge-primary">{allNotes}</span>
        </p>
        <p>
          completed
          <span className="badge badge-primary">{completedNotes}</span>
        </p>
        <p>
          open
          <span className="badge badge-primary">{unCompletedNotes}</span>
        </p>
      </div>
    </>
  );
}

export default NoteItemHeader;
