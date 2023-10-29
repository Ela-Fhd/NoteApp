function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <>
      <div className="note-header">
        <h2>My Notes ({notes.length})</h2>
        <select
          value={sortBy}
          name=""
          id=""
          className="note-app-select"
          onChange={onSort}
        >
          <option className="note-app-option" value="latest">
            sort based on latest
          </option>
          <option className="note-app-option" value="earliest">
            sort based on earliest
          </option>
          <option className="note-app-option" value="completed">
            sort based on completed
          </option>
        </select>
      </div>
    </>
  );
}

export default NoteHeader;
