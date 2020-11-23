import React from 'react'
import {Spinner,ListGroup } from 'react-bootstrap'


class CommentList extends React.Component {
    state = {
        comments: [],
        loading:false,
        
    }




    componentDidMount= async () => {
      
       
        try {
            let response = await fetch('  https://striveschool-api.herokuapp.com/api/comments/' + this.props.elementId,
                {
                    method: 'GET',
                
                    headers: new Headers({
                       
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGE2Njk4MzViMDAwMTc1ODRmMzYiLCJpYXQiOjE2MDU3OTg1MDIsImV4cCI6MTYwNzAwODEwMn0._FsEOZBI398ZuFgH3BLEbni2McUPv6s7QSmxC2-ee8w"
                    })
                })
            if (response.ok) {
             
                let body= await  response.json()
                this.setState({comments:body ,loading:false})
                console.log(body)
             
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
          
        }
    }
    

    render() {
        return (
            
            <div className="mb-5">
                <h2>Comments</h2>
                {
                    this.state.loading && (
                        <div className="font-bold d-flex justify-content-center">
                            <span>Feching reservations</span>
                            <Spinner animation="border" variant="success" />
                        </div>
                    )
                }
              {this.state.comments.map((comments, index) => (
                    <ListGroup key={index}>
                        <ListGroup.Item>
                            Comment: {comments.comment}, Rate{comments.rate}
                            {console.log(comments.comment)}
                            
                        </ListGroup.Item>
                    </ListGroup>
                    ))}
                
               
                   </div>         
               
           
        )
    }
}

export default CommentList
