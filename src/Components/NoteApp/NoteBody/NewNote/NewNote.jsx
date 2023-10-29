import React, { useState } from "react";
import "./NewNote.css";

function NewNote({ onAddNote }) {
  const [inputVal, setInputVal] = useState({
    id: "",
    title: "",
    description: "",
    createdAt: "",
    completed: "",
  });

  const [flag, setFlag] = useState(false);
  const [errMassage, setErrMassage] = useState("");

  const inputHandler = (e) => {
    setInputVal((prevVal) => ({
      ...prevVal,
      id: Date.now(),
      [e.target.name]: e.target.value,
      createdAt: new Date().toISOString(),
      completed: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.keyCode);

    if (!inputVal.title && !inputVal.description) {
      setFlag(true);
      setErrMassage("plaese fill all field...");
      return false;
    }

    if (!inputVal.title || inputVal.title === " ") {
      setFlag(true);
      setErrMassage("plaese fill title...");
      return false;
    }

    if (!inputVal.description || inputVal.description === " ") {
      setFlag(true);
      setErrMassage("plaese fill description...");
      return false;
    }

    setFlag(false);

    onAddNote(inputVal);
    setInputVal({
      id: "",
      title: "",
      description: "",
      createdAt: "",
      completed: "",
    });
  };

  // console.log(not);
  // console.log(inputVal);

  return (
    <>
      <div className="add-new-note">
        <h3 className="new-note-header">Add New Note</h3>
        <div
          className="fill-error"
          style={{
            padding: flag ? "8px" : 0,
            border: flag ? "1px solid #f5c6cb" : "none",
          }}
        >
          {flag && errMassage}
        </div>
        <form className="new-note-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={inputVal.title}
            placeholder="note title..."
            className="new-note-input"
            onChange={inputHandler}
          />
          <input
            type="text"
            name="description"
            value={inputVal.description}
            placeholder="note description..."
            className="new-note-input"
            onChange={inputHandler}
          />
          <button type="submit" className="new-note-btn">
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
}

export default NewNote;
