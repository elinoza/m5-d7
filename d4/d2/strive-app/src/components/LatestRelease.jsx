import React, { Component } from "react";

import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import books from "../data/fantasy.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Carousel style={{ width: "250px" }}>
          {books.map((item) => (
            <Carousel.Item>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Category: {item.category}
                    It is only ${item.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}
export default LatestRelease;
