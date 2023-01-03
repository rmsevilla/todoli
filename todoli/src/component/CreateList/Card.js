import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OurCard(props) {
  //need Card img, for thumbnail
  //write go somewhere button to route to list Content
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

//<Route element = {<ListContent content = "grocery">}

export default OurCard;