import React from 'react'
import { useNavigate} from 'react-router-dom'

const ListContentHeader = () => {
    const navigate = useNavigate();
    const navigateBack = () =>{
        navigate('/createlist');
    }
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button onClick={navigateBack}>ToDoLi</button>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default ListContentHeader