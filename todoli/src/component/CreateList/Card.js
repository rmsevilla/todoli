import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OurCard(props) {
  //need Card img, for thumbnail
  //write go somewhere button to route to list Content
  return (
    <Card style={{width:"18rem",border:"solid 1px black",boxSizing:"border-box"}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.image} style={{height:"65%"}}/>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

//<Route element = {<ListContent content = "grocery">}

export default OurCard;