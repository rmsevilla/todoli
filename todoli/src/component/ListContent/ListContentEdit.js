import React, { useState } from 'react';
import {useOutletContext,useParams } from 'react-router-dom';


function ListContentEdit(){

    const [userInputEdit, setInputEdit] = useState("");  
    
    const edit = useOutletContext();

    const {task} = useParams();

    const handleInputChangeEdit = (e)=>{
        setInputEdit(e.target.value);
    }

    const handleEdit= (e)=>{
        edit(task,userInputEdit);
        e.preventDefault();
    }

    return(
    <div>
        <form>
        <div className="mb-3">
            <input onChange={handleInputChangeEdit} type="text" className="form-control" maxLength="60" placeholder='Edit Here'/>
        </div>
            <button type="submit" className="btn btn-primary" onClick={handleEdit} style={{float:"right"}}>Edit Task</button>
        </form>
    </div>
    )
}

export default ListContentEdit