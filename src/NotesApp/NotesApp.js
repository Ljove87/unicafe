
import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Toggable from './components/Toggable'
import NoteForm from './components/NoteForm'

import noteService from './services/notes'
import loginService from './services/login'
  
const NotesApp = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [loginVisible, setLoginVisible] = useState(false)
  
    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
      
        noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(error => {
          setErrorMessage(
            `Note '${note.content}' was already removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          })
      }
    const rows = () => notes.map(note => 
        <Note key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
        ) 

// set visibility toggle of login

const loginForm = () => {
  const hideWhenVisible = { display: loginVisible ? 'none' : '' }
  const showWhenVisible = { display: loginVisible ? '' : 'none' }

  return (
    <div>
      <Toggable buttonLabel="Login">
        <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
      </Toggable>
    </div>
  )
}



    // use effect hook
    useEffect(() => {
        noteService
          .getAll()
          .then(initialNotes => {
            setNotes(initialNotes)
          })
      }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          noteService.setToken(user.token)
        }
    }, [])

    const noteFormRef = React.createRef()

    // add new note 
        const addNote = (event) => {
        event.preventDefault()
        noteFormRef.current.toggleVisibility()
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
    

    // login
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
          const user = await loginService.login({
            username, 
            password,
          })

          window.localStorage.setItem(
            'loggedNoteappUser', JSON.stringify(user)
          ) 
          noteService.setToken(user.token)
          setUser(user)
          setUsername('')
          setPassword('')
        } catch (exception) {
          setErrorMessage('Wrong credentials')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
      }
    


  
  return (
      <div className="container pt-5 pb-5">

        <Notification message={errorMessage} />

        <h2>Login</h2>

        {user === null ? loginForm() :
          <div>
            <p>{user.name} logged in</p>
            <Toggable buttonLabel="New Note" ref={noteFormRef}>
              <NoteForm
              onSubmit={addNote}
              value={newNote}
              handleChange={handleNoteChange}
              />
            </Toggable>
          </div>
        }
      

        <h1>Note</h1>
        <ul>
            {rows()}      
         </ul>
         { <form onSubmit={addNote}>
            <input onChange={handleNoteChange} value={newNote} />
            <button type="submit">save</button>
         </form> }
      </div>
    )
}

export default NotesApp