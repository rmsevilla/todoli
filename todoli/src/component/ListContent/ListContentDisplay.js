import React from 'react'

function ListContentDisplay(){
    return (
        <div>
            <br></br>
           <div class="card shadow p-3 mb-5 bg-body rounded mx-auto">
            <h5 class="card-header">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter Task here" aria-label="Task" aria-describedby="basic-addon1"></input>
                <span><button type="button" class="btn btn-primary ms-2">Add Task</button></span>
            </div>
            </h5>
                <div class="card-body">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <th className = "text-left">Task</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td> 
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    Placeholder task
                                </td>
                                    <div>
                                        <button className="btn btn-danger rounded-pill bi bi-trash3">delete</button>
                                    </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListContentDisplay