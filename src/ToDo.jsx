import React from 'react'
import './listitem.css'
import DeleteIcon from '@material-ui/icons/Delete';

function ToDo(props) {


    return (
        <div className="ToDoListDelete">
            <button onClick={()=>{
                props.Selected(props.id)
            }} className="deleteButton"><DeleteIcon/></button>
            <li className="list-Item">{props.text}</li>
        </div>
        )
   
}

export default ToDo
