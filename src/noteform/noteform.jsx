import React,{Component} from 'react'
import './noteform.css'

export default class NoteForm extends Component{
    /*constructor(props){
        super(props)
    }*/
    addNote(){
        this.props.addNote(this.textInput.value)
        this.textInput.value=''
    }
    render(){
        return(
            <div className='NoteForm'>
                <input
                    type='text'
                    placeholder='write a note'
                    ref={input=>{this.textInput=input}}
                    onSubmit={()=>this.addNote(this.textInput)}
                />
                <button
                    onClick={()=>this.addNote(this.textInput)}
                >Add Note</button>
            </div>
        )
    }
}
