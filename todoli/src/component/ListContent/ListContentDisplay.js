import React from 'react'
import './ListContent.css'
import OneTask from './oneTask';

function ListContentDisplay(props){

    const stuffArray = props.arr;
    const stuff = stuffArray.map((todo,index)=><OneTask stuff={todo} key ={index} 
                                                delete = {props.delete}></OneTask>); 

                                        
    return (
        <table className = "my-table">
            <thead>
                <tr>
                    <th className="tree-column-1 ">Task</th>
                    <th className='tree-column-2'></th>
                    <th className='tree-column-3'></th>
                </tr>
            </thead>
            <tbody>
                {stuff}
            </tbody>    
        </table>
    )
}

export default ListContentDisplay