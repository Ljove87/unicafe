
import React, {useState, useEffect} from 'react'
import Note from './components/Note'

import noteService from './services/notes'

  
const NotesApp = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('new note')
  
    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
      
        noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(error => {
            alert(
              `the note '${note.content}' was already deleted from server`
            )
            setNotes(notes.filter(n => n.id !== id))
          })
      }
    const rows = () => notes.map(note => 
        <Note key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
        ) 

    // use effect hook
    useEffect(() => {
        noteService
          .getAll()
          .then(initialNotes => {
            setNotes(initialNotes)
          })
      }, [])

    // add new note 
        const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }

        noteService
        .create(noteObject)
           .then(returnedNote => {
            setNotes(notes.concat(returnedNote))
            setNewNote('')
        })
        }

     const handleNoteChange = (event) => {
         console.log(event.target.value)
         setNewNote(event.target.value)
       }
    
  
    return (
      <div>
        <h1>Notes</h1>
        <ul>
            {rows()}      
         </ul>
         <form onSubmit={addNote}>
            <input onChange={handleNoteChange} value={newNote} />
            <button type="submit">save</button>
         </form>
      </div>
    )
  }

export default NotesApp