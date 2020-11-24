import React from "react";
import SingleBook from "./SingleBook";
import CommentArea from "../components/CommentArea";
import { Form, Container, Row, Col } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    booklist: this.props.arr,
    selectedBook:{}
  };

  filterBookList = (input) => {
    this.setState({
      booklist: this.props.arr.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      ),
    });
  };

  handleSelection=(item)=>{
    this.setState({
      selectedBook:item
    })
  }

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
          <Col md={9}>
            {this.state.booklist.map((item) => (
              <SingleBook book={item} key={item.asin} onClick={() => this.handleSelection(item)} />
            ))}
            </Col>
            <Col md={3} elementId={this.state.selectedBook.asin}><CommentArea/></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
