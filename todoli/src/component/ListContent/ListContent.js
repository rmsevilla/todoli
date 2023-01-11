import ListContentFooter from "./ListContentFooter";
import ListContentHeader from "./ListContentHeader";
import ContentService from "./listContentService";

function ListContent(props){
    return(
        <><div>
            <ListContentHeader></ListContentHeader>
            <ContentService category = {props.category}></ContentService>
        </div><ListContentFooter></ListContentFooter></>
    )
}

export default ListContent;