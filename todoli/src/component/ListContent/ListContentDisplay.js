import React from 'react'
import './ListContent.css'
import OneTask from './oneTask';

function ListContentDisplay(props){

    const stuffArray = props.arr;
    const stuff = stuffArray.map((todo,index)=><OneTask stuff={todo} key ={index}></OneTask>); 
    return (
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
    )
}

export default ListContentDisplay