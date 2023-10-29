import React from 'react'
import NoteItem from './NoteItem/NoteItem'
import NoteItemHeader from './NoteItemHeader/NoteItemHeader'


function NoteList({ notes, deleteNote, onComplete ,sortBy}) {

    let sortNotes = notes;
    if(sortBy==="earliest") sortNotes= [...notes].sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt)); //ascending 
    // a > b   ==> change place -> b , a    
    
    if(sortBy==="latest") sortNotes= [...notes].sort((a,b)=>  new Date(b.createdAt) -  new Date(a.createdAt)); //descending
    // a > b   ==> not change place -> a,b

    if(sortBy==="completed") sortNotes= [...notes].sort((a,b)=> Number(b.completed) - Number(a.completed)); //descending

    return (
        <>
            <NoteItemHeader notes={notes} />
            {
                sortNotes.map((note) => {
                    return <NoteItem note={note} key={note.id} deleteNote={deleteNote} onComplete={onComplete} />
                })
            }
        </>
    )
}

export default NoteList