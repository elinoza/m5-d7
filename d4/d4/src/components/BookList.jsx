import React from "react";
import SingleBook from "./SingleBook";
import { Form, Container, Row, Col } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    booklist: this.props.arr,
  };

  filterBookList = (input) => {
    this.setState({
      booklist: this.props.arr.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => this.filterBookList(e.target.value)}
                    type="text"
                    placeholder="Search for book"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            {this.state.booklist.map((item) => (
              <SingleBook book={item} key={item.asin} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
