import React, { Component } from 'react';
import Note from './note/note'
import NoteForm from './noteform/noteform'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            notes:[
                {
                    noteId:1,
                    noteContent:'note 1'
                },
                {
                    noteId:2,
                    noteContent:'note 2'
                }
            ]
        }
    }
   /* addNote=event=>{
        console.log(event)
    }*/

    render() {
    return (
      <div className="notesContainer">
        <div className='notesHeader'>
            <h1>Hollaaa</h1>
        </div>
        <div className='notesBody'>
            <ul>
                {
                    this.state.notes.map(note=>{
                        return(
                            <Note
                                noteId={note.noteId}
                                noteContent={note.noteContent}
                                key={note.noteId}
                            />
                        )
                    })
                }
            </ul>
        </div>
        <div className='notesFooter'>
            <NoteForm/>
        </div>
      </div>
    );
  }
}

export default App;
