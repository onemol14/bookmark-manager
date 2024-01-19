import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tile({ websiteName, websiteURL }) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title> {websiteName} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={websiteURL} target="_blank">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Tile;