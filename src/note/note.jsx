import React, {Component}from'react'
import './note.css'
export default class Note extends Component{

    handleRemove(id){
        console.log(id)
    }

    render(){
        return(
            <div className='Note'>
                <span
                    onClick={()=>this.handleRemove(this.props.noteId)}
                >&times;</span>
                <p>{this.props.noteContent}</p>
            </div>
        )
    }
}
