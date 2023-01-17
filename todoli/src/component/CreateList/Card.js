
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function OurCard(props) {
  //need Card img, for thumbnail
  //write go somewhere button to route to list Content
  const navigate = useNavigate();
  const navigateToList = ()=>{
    navigate('/listcontent/'+ props.category);
  }

  return (
    <Card className= "shadow-sm mb-5 bg-body rounded" style={{width:"18rem",border:"solid 1px black", }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.image} style={{height:"65%"}}/>
        <Card.Text>{props.text}</Card.Text>
        <button className="btn btn-success btn-sm rounded-pill" onClick={navigateToList}>
          Go To List
        </button>
      </Card.Body>
    </Card>
  );
}

//<Route element = {<ListContent content = "grocery">}

export default OurCard;