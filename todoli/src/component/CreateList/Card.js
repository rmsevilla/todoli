
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";
import dataMap from '../ListContent/MockData';

function OurCard(props) {
  const navigate = useNavigate();

  const navigateToList = ()=>{
    navigate('/listcontent/'+ props.category);
    if(JSON.parse(window.localStorage.getItem(props.category))== null){
      window.localStorage.setItem(props.category,JSON.stringify(dataMap.get(props.category)));
    }
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


export default OurCard;