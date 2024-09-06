import React from 'react';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ imageSrc, label }) => {
  return (
    <Card style={{ width: '18rem', margin: '40px', padding: '5px' }}>
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{label}</Card.Title>
      <Card.Text>
       {label}
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default ImageCard;