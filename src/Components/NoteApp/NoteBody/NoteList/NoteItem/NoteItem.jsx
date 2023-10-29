import React from 'react'
import { FcFullTrash } from 'react-icons/fc'
import './NoteItem.css'

function NoteItem({ note, deleteNote, onComplete }) {


    return (
        <>
            <div className='note-list'>
                <div className="note-list-item">

                    <div className="note-item">

                        <div className="note-item-header">

                            <div className="note-info">
                                <h3 className={`${note.completed ? 'completed' : ''}`}>{note.title}</h3>
                                <div className="note-item-desc"><p>{note.description}</p></div>
                            </div>

                            <div className="note-operation">
                                <button className="delete-note note-operation-item" onClick={() => deleteNote(note.id)}>
                                    <FcFullTrash />
                                </button>
                                <input className='note-operation-item' type="checkbox" onChange={onComplete} name={note.id} value={note.id} />
                            </div>
                        </div>

                        <div className="note-item-footer">
                            <p className="date">
                                {
                                 new Date(note.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NoteItem