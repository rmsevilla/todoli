import './CreateListHeader.css';
import Button from 'react-bootstrap/Button';
function CreateListHeader(){

    //implement an onclick for the button, to bring up the catergory 
    //selection

    return(
        <div className = "top">
            <h1>Create a new List</h1>
            <div className = "button-right"> 
                <Button variant="primary"> Create</Button>
            </div>
        </div>
    )
}

export default CreateListHeader;