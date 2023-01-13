import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function ListContentEdit(){

    const [userInputEdit, setInputEdit] = useState("");  
    
    // const {state} = useLocation(); //this is the edit from editparent
    // const {stuff} = state;

    const handleInputChangeEdit = (e)=>{
        setInputEdit(e.target.value);
    }

    const handleEdit= (e)=>{
        // console.log(stuff);
        e.preventDefault();
    }

    return(
    <div>
        <form>
        <div className="mb-3">
            <input onChange={handleInputChangeEdit} type="text" className="form-control" maxLength="30" placeholder='Edit Here'/>
        </div>
            <button type="submit" className="btn btn-primary" onClick={handleEdit} style={{float:"right"}}>Edit Task</button>
        </form>
    </div>
    )
}

export default ListContentEdit