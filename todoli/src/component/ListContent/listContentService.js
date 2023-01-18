import React, { useState,useEffect } from 'react';
import ListContentDisplay from "./ListContentDisplay";
import { Outlet, useNavigate } from "react-router-dom";
import './ListContent.css';
import dataMap from './MockData';


function ContentService (props){
    //const [stuffInCategoryArray,setStuff] = useState(dataMap.get(props.category));
    const [stuffInCategoryArray,setStuff] = useState(JSON.parse(window.localStorage.getItem(props.category)));
    const [userInput, setInput] = useState("");

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }

    const navigate = useNavigate();

    //this is not permanent, somehow when I leave, the task go back to normal
    const handleAddTask = () =>{
        setStuff([...stuffInCategoryArray,userInput]);
    }


    useEffect(
        ()=>{setStuff(JSON.parse(window.localStorage.getItem(props.category)))} ,[]
    );

    useEffect(
        ()=>{window.localStorage.setItem(props.category,JSON.stringify(stuffInCategoryArray))} ,[stuffInCategoryArray]
    );

    const handleEditParent = (...params) =>{
       //index work. need input edit text box?
       let indexToChange = stuffInCategoryArray.indexOf(params[0]);
       let task = params[1];
       if(indexToChange!== -1){
        stuffInCategoryArray[indexToChange] = task;
       }
       setStuff([...stuffInCategoryArray]);
       //navigate - 1 is to get rid of the edit,but also update the task
       navigate(-1);
    }

    //this is not permanent, somehow when I leave, the task go back to normal
    const handleDeleteParent = (e) =>{
        let filterArray = stuffInCategoryArray.filter(
                function(stuff) {return stuff !== e.target.value}
        );
        setStuff([...filterArray]);
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
                <div className="pad">
                    <Outlet context={handleEditParent}></Outlet>
                </div>
                    <div className="card-body">
                        <ListContentDisplay arr = {stuffInCategoryArray} 
                          delete = {handleDeleteParent} ></ListContentDisplay>
                    </div>
                </div>
            </div>
        )

}

export default ContentService;