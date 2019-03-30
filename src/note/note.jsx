import React, {Component}from'react'
import './note.css'
export default class Note extends Component{

    handleRemove(id){
        this.props.handleRemove(id)
        //console.log(event)
    }

    render(){
        return(
            <div className='Note'>
                <span
                    onClick={()=>{this.handleRemove(this.props.noteId)}}
                >&times;</span>
                <br/>
                <p>{this.props.noteContent}</p>
            </div>
        )
    }
}
