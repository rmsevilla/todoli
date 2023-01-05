import ListContentFooter from "./ListContentFooter";
import ListContentHeader from "./ListContentHeader";
import ListContentDisplay from "./ListContentDisplay";

function ListContent(props){
    return(
        <><div>
            <ListContentHeader></ListContentHeader>
            <ListContentDisplay category = {props.category}></ListContentDisplay>
        </div><ListContentFooter></ListContentFooter></>
    )
}

export default ListContent;