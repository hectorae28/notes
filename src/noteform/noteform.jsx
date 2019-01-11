import React from 'react'
import './noteform.css'

const NoteForm=props=>(
    <div className='NoteForm'>
        <input
            type='text'
            placeholder='write a note'
            //ref={input=>{this.textInput=input}}
        />
        <button
            //onClick={()=>props.addNote(this.textInput)}
        >Add Note</button>
    </div>
)

export default NoteForm
