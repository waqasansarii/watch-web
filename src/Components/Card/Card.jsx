import React from "react";
import { Card } from "react-bootstrap";

const WatchCard = () => {
  return (
    <div className='watch_card_md'>
      <Card style={{ width: "" }} className='watch_card' >
        <Card.Img
          variant="top"
          src="https://assets.entrepreneur.com/content/3x2/2000/20200331073126-rolex-4181407.jpeg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>$33,000</Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default WatchCard;
