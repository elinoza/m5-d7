import React from "react";

import {Jumbotron,Button } from "react-bootstrap";



const Welcome= () => {
    return (
      <>
    
         <Jumbotron>
        <h1>Welcome, Bookworms!</h1>
        <p>
        Here you can find a lot of books.  Go lost yourself in the pages!
        </p>
        <p>
            <Button variant="dark" >Learn more</Button>
        </p>
        </Jumbotron>
     
   
      </>
    );
  };
  export default Welcome