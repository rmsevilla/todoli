import React from 'react'
import './ListContent.css'
import dataMap from './MockData'
import OneTask from './oneTask';

function ListContentDisplay(props){

    //to get stuff from dataMap, need dataMap.get(Grocery)
    const stuffArray = dataMap.get(props.category);
    const stuff = stuffArray.map((todo,index)=><OneTask stuff={todo} key ={index}></OneTask>); 


    return (
        <div>
            <br></br>
           <div className="card shadow p-3 mb-5 bg-body rounded mx-auto">
            <h5 className="card-header">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Task here" aria-label="Task" aria-describedby="basic-addon1" maxLength="30"></input>
                <span><button type="button" className="btn btn-success ms-2">Add Task</button></span>
            </div>
            </h5>
                <div className="card-body">
                    <table className = "table table-striped listTable">
                        <thead>
                            <tr>
                                <th className = "text-left">Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stuff}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListContentDisplay