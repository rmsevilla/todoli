import OurCard from './Card';
import './CreateList.css';
import CreateListHeader from './CreateListHeader';
import grocery from '../../image/grocery.jpg';
import chore from '../../image/chore.jpg';
import homework from '../../image/assignment.jpg';
import other from '../../image/other.jpg';

function CreateList(){
    //put url for card thumbnail, and implement on click of the card
    //that bring us to the listContent
    return(
        <div>
            <CreateListHeader></CreateListHeader>
            <div className='card-list-container'>
                <OurCard category = "Grocery" title="Grocery List" text="Buying Grocery" image = {grocery}></OurCard>
                <OurCard category = "Chore" title="Chore To Do" text="Got Chore To Do" image = {chore}></OurCard>
                <OurCard category = "Assignment" title="Assignment To Do" text="Going To Do Homework" image = {homework}></OurCard>
                <OurCard category = "Other" title = "Other" text="Other Stuff" image = {other}></OurCard>
            </div>
        </div>
    )
}

export default CreateList;