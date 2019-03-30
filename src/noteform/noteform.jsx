import React from 'react'
import './noteform.css'

const NoteForm=(props)=>{
    let textInput=React.createRef()
    return(
            <div className='NoteForm'>
                <form
                onSubmit={(event)=>{
                        props.addNote(textInput.current.value)
                        textInput.current.value=''
                        textInput.current.focus()
                        event.preventDefault()
                    }}
                >
                <input
                    type='text'
                    placeholder='write a note'
                    ref={textInput}
                    //onSubmit={()=>props.addNote(textInput)}
                />
                <button
                    /*onClick={()=>{
                        props.addNote(textInput.current.value)
                        textInput.current.value=''
                        textInput.current.focus()
                        textInput.current.preventDefault()
                    }}*/
                >Add Note</button>
                </form>
            </div>
        )
}

export default NoteForm
