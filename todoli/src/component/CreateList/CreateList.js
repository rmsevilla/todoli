import OurCard from './Card';
import './CreateList.css';
import CreateListHeader from './CreateListHeader';
import grocery from '../../image/grocery.jpg';
import chore from '../../image/chore.jpg';
import homework from '../../image/assignment.jpg';
import other from '../../image/other.jpg';
import CreateListFooter from './CreateListFooter';
import ListContentHeader from '../ListContent/ListContentHeader';

function CreateList(){
    return(
        <div>
            <ListContentHeader></ListContentHeader>
            <CreateListHeader></CreateListHeader>
            <div className='card-list-container'>
                <OurCard category = "Grocery" title="Grocery List" text="Buying Grocery" image = {grocery}></OurCard>
                <OurCard category = "Chore" title="Chore To Do" text="Got Chore To Do" image = {chore}></OurCard>
                <OurCard category = "Assignment" title="Assignment To Do" text="Going To Do Homework" image = {homework}></OurCard>
                <OurCard category = "Other" title = "Other" text="Other Stuff" image = {other}></OurCard>
            </div>
            <CreateListFooter></CreateListFooter>
        </div>
    )
}

export default CreateList;