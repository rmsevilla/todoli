import dataMap from "./MockData";
import React, { useState } from 'react';
import ListContentDisplay from "./ListContentDisplay";

function ContentService (props){
    const [stuffInCategoryArray,setStuff] = useState(dataMap.get(props.category));
    const [userInput, setInput] = useState("");

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }


    const handleAddTask = () =>{
        setStuff([...stuffInCategoryArray,userInput]);
    }

    const handleEditParent = () =>{
        console.log("edit parent");
    }

    const handleDeleteParent = (e) =>{
       setStuff(stuffInCategoryArray.filter(
            function(stuff) {return stuff !== e.target.value}
       ));
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
                    <ListContentDisplay arr = {stuffInCategoryArray} 
                    edit = {handleEditParent} delete = {handleDeleteParent} ></ListContentDisplay>
                </div>
            </div>
        </div>
    )
}

export default ContentService;