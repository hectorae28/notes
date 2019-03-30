import React, { Component } from 'react'
import firebase from 'firebase'
import 'firebase/database'
import config from './config/config.js'
import Note from './note/note'
import NoteForm from './noteform/noteform'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.app=firebase.initializeApp(config)
        this.db=this.app.database().ref().child('notes')
        this.state={
            notes:[
                /*{
                    noteId:1,
                    noteContent:'note 1'
                },
                {
                    noteId:2,
                    noteContent:'note 2'
                }*/
            ]
        }
    }
    componentDidMount(){
        const {notes} = this.state
        this.db.on('child_added',snap=>{
            notes.push({
                noteId:snap.key,
                noteContent:snap.val().noteContent
            })
            this.setState({notes})
        })
        this.db.on('child_removed',snap=>{
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].noteId===snap.key) {
                    notes.splice(i,1)
                }
            }
            this.setState({notes})
        })
        //this.setState({notes})
    }
    addNote = content =>{
        //console.log(content)
        this.db.push().set({noteContent:content})
        /*let {notes}=this.state
        notes.push({
            noteId:notes.length+1,
            noteContent:event
        })
        this.setState({
            notes
        })*/
    }
    handleRemove=id=>{
        this.db.child(id).remove()
    }

    render() {
    return (
      <div className="notesContainer">
        <div className='notesHeader'>
            <h1>Notes</h1>
        </div>
        <div className='notesBody'>
                {
                    this.state.notes.map(note=>{
                        return(
                            <Note
                                handleRemove={this.handleRemove}
                                noteId={note.noteId}
                                noteContent={note.noteContent}
                                key={note.noteId}
                            />
                        )
                    })
                }
        </div>
        <div className='notesFooter'>
            <NoteForm
                addNote={this.addNote}
            />
        </div>
      </div>
    );
  }
}

export default App;
