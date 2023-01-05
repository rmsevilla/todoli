import React from 'react'
import './ListContent.css'

function ListContentDisplay(){
    return (
        <div>
            <br></br>
           <div class="card shadow p-3 mb-5 bg-body rounded mx-auto">
            <h5 class="card-header">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter Task here" aria-label="Task" aria-describedby="basic-addon1" maxLength="30"></input>
                <span><button type="button" class="btn btn-success ms-2">Add Task</button></span>
            </div>
            </h5>
                <div class="card-body">
                    <table className = "table table-striped listTable">
                        <thead>
                            <th className = "text-left">Task</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td> 
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        &nbsp; Placeholder task
                                </td>

                                <td align="right">
                                    <div className="row g-0">

                                            <div id="outer">
                                                <button className="btn btn-primary rounded-pill button1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                                    &nbsp; Edit
                                                </button>

                                                <button className="btn btn-danger rounded-pill button2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                                &nbsp; Delete
                                                </button>
    
                                            </div>
                                    </div>
                                </td>

                                <td align="left">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListContentDisplay