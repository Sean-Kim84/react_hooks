import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const NoteApp = () => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [notes, setNotes] = useState(notesData || []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle('');
        setBody('');
    }
    
    const removeNote = (title) =>  {
      setNotes(notes.filter(note => note.title !== title))
    }

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    })

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>remove</button>
                </div>
            ))}
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <button>add note</button>
            </form>
        </div>
    )
}

// const App = (props) => {

//   const [count=0, setCount] = useState(props.count);
//   const [text, setText] = useState('');

//   useEffect(() => {
//    console.log('Start the useEffect'); 
//    document.title = count
//   })
//   return(
//     <div>
//       <p>The currnet {text || 'count'} is {count}</p>
//       <button onClick={() => {setCount(count-1)}}>-1</button>
//       <button onClick={() => {setCount(props.count)}}>setUp</button>
//       <button onClick={() => {setCount(count+1)}}>+1</button>
//       <input type={text} onChange={e => setText(e.target.value)}/>
//     </div>
//   )
// }

ReactDOM.render(<NoteApp/>, document.getElementById('root'));
