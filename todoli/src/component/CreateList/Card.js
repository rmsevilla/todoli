
//normal boostrap not wokring for now
//either make own card, or try react-boostrap
// function Card(){
//     return(
//         <div className="card">
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//         </div>
//     )
// }

// export default Card;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OurCard(props) {
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

export default OurCard;