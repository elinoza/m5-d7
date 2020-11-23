import React from "react";
import { Card} from "react-bootstrap";
import "./SingleBook.css";
import AddComment from "./AddComment.jsx"
import CommentsList from "./CommentsList.jsx"

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <>
       {
                    this.state.selected && (
                      
                        <CommentsList elementId={this.props.book.asin}/>
                    )
       }
       {
                    this.state.selected && (
                        <AddComment elementId={this.props.book.asin}/>
                       
                    )
                }
      
      <Card
        onClick={() => this.toggleSelected()}
        style={{ width: "16rem" }}
        className={
          this.state.selected === true
            ? "cardSelected mx-auto my-3"
            : "mx-auto my-3"
        }
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
      </>
    );
  }
}

export default SingleBook;
