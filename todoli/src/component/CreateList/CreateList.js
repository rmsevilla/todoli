import OurCard from './Card';
import './CreateList.css';
import CreateListHeader from './CreateListHeader';

function CreateList(){
    //put url for card thumbnail, and implement on click of the card
    //that bring us to the listContent
    return(
        <div>
            <CreateListHeader></CreateListHeader>
            <div className='card-list-container'>
                <OurCard title="1" text="i like to sleep"></OurCard>
                <OurCard title="2" text="i like to eat"></OurCard>
                <OurCard title="3" text="i like to game"></OurCard>
            </div>
        </div>
    )
}

export default CreateList;