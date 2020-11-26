import React from 'react'
import { Container, Form, Button,Col} from 'react-bootstrap'




class Register extends React.Component {

    state={
        register:{
        name:'',
        surname:'',
        email:'',
        adress1:'',
        adress2:'',
        zip:'',
        date:''
    }
    }

    submitForm=()=> {
        
        console.log('submit')
    }

    updateField=(e)=>{
        let register= {...this.state.register}
        let currentid=e.currentTarget.id
        register[currentid]=e.currentTarget.value
        console.log(e.currentTarget.id)


        this.setState({ register:register  })

    }



    render() {
        return (
            <Container >
             <Form className="px-5 mt-5" onSubmit={this.submitForm}>
             <Form.Row>
                <Form.Group  as={Col}  required>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="text"  value={this.state.register.name} onChange={this.updateField} placeholder="Enter Name" />
                    
                </Form.Group>
                <Form.Group  as={Col} id="formBasicSurnamme" required>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text"  value={this.state.register.surname} onChange={this.updateField} placeholder="Enter surname" />                   
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} id="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  value={this.state.register.email} p onChange={this.updateField}laceholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} id="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  value={this.state.register.password onChange={this.updateField}} placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control  id="adress1"value={this.state.register.adress1} onChange={this.updateField} placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group >
                <Form.Label >Address 2</Form.Label>
                <Form.Control  id="adress2" value={this.state.register.adress2} onChange={this.updateField} placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} >
                <Form.Label htmlFor="city" >City</Form.Label>
                <Form.Control  id="city" type="text"  value={this.state.register.adress2} onChange={this.updateField} />
                </Form.Group>
                <Form.Group>
                                <Form.Label htmlFor="date">Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="Date of your birth"
                                    value={this.state.register.date}
                                    onChange={this.updateField}
                                    required
                                />
                            </Form.Group>
              
            </Form.Row>
            

            

            <Button variant="primary" type="submit" >
                Submit
            </Button>
</Form>
              
                
            </Container>

        
            
           
        )
    }
}

export default Register