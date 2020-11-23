import React, { Component } from "react";

import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

let bookCategories=[ horror,scifi,romance,history,fantasy]
let books={
  fantasy:fantasy,
  horror,
  romance,
  scifi,
}

class LatestRelease extends Component {
 
  state={
     books:books.fantasy

   }

   handleDropdownChange = (category) => {
    this.setState({
      books:books[category].slice(0, 12),
        categorySelected: category,
     
    })
    
    
  };
   

  render() {
    return (
      <Container>


        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" onChange={()=>handleDropdownChange(category)}>
                SELECT CATEGORY
            </Dropdown.Toggle>

            <Dropdown.Menu>
               {bookCategories.map((category)=>( <Dropdown.Item href="#/action-1">HORROR</Dropdown.Item>))}
               
            </Dropdown.Menu>
            </Dropdown>

         
        <Row>
       
          {this.state.books.map((book) => (
            <Col  xs={6} >
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    Category: {book.category}
                    It is only ${book.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
          
          ))}

      </Row>
      </Container>
    );
  }
}
export default LatestRelease;
