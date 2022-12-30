import Card from './Card';
import './CreateList.css';
import CreateListHeader from './CreateListHeader';

function CreateList(){

    return(
        <div>
            <CreateListHeader></CreateListHeader>
            <Card></Card>
        </div>
    )
}

export default CreateList;