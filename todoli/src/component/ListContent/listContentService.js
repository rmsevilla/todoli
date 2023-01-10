import dataMap from "./MockData";
import React, { useState } from 'react';
import ListContentDisplay from "./ListContentDisplay";

function ContentService (props){ //props hold category


    //how do i add task or remove task
    //just try to figure out add task for now
    //want add task, to change stuff in category array

    //maybe need a setter or getter to get enter task? 
    //then once add task hit, add it to stuffCatArray
    const [stuffInCategoryArray,setStuff] = useState(dataMap.get(props.category));
    const [userInput, setInput] = useState("");

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }


    const handleAddTask = () =>{
        setStuff([...stuffInCategoryArray,userInput]);
    }


    return (
        <div>
            <br></br>
            <div className="card shadow p-3 mb-5 bg-body rounded mx-auto">
            <h5 className="card-header">
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Task here"
                 aria-label="Task" aria-describedby="basic-addon1" maxLength="30"
                 onChange={handleInputChange}></input>
                <span><button type="button" className="btn btn-success ms-2" onClick={handleAddTask}>Add Task</button></span>
                </div>
            </h5>
                <div className="card-body">
                    <ListContentDisplay arr = {stuffInCategoryArray}></ListContentDisplay>
                </div>
            </div>
        </div>
    )
}

export default ContentService;