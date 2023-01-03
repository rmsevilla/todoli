import ListContentFooter from "./ListContentFooter";
import ListContentHeader from "./ListContentHeader";
import ListContentDisplay from "./ListContentDisplay";

function ListContent(){
    return(
        <><div>
            <ListContentHeader></ListContentHeader>
            <ListContentDisplay></ListContentDisplay>
        </div><ListContentFooter></ListContentFooter></>
    )
}

export default ListContent;