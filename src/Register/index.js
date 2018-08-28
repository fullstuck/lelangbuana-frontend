import React from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: "https://lelangbuana.herokuapp.com" || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

export default class Register extends React.Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            username:"",
            password:"",
            profile_photo:"photo",
            phone_number:"123",
            email:"",
            first_name:"",
            last_name:"",
            address:"",
            city:"",
            province:"",
            country:"",
            zip_code:"",
            id_card:"",
            status:"active"
        }
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
      }
      

      handleSubmit = event => {
          event.preventDefault()
        const payload = {
            username: this.state.username,
            password: this.state.password,
            profile_photo:"photo",
            phone_number:this.state.phone_number,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            zip_code: this.state.zip_code,
            id_card: this.state.id_card,
            status: this.state.status
          }


        request
        .post('/users/register',payload)
        .then((response) => {
            // let token = response.data.token
            // this.setState({
            //     islogin: true,
            //     token:token
            // });
            // localStorage.setItem("token",token)
            console.log(response)
        })
        .catch(error=>{console.log(error)})
        console.log(payload)
      }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Label for="Username">Username</Label>
                                <Input
                                onChange={this.handleChange}
                                    type="username"
                                    name="username"
                                    id="username"
                                    placeholder="Your Username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="FirstName">First Name</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="First Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="LastName">Last Name</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Last Name"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Label for="Address">Address</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="City">City</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="State/Province">State/Province</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="province"
                                    id="province"
                                    placeholder="State/Province"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Country">Country</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="country"
                                    id="country"
                                    placeholder="Country"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Postalcode">Zip/Postal Code</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="zip_code"
                                    id="zip_code"
                                    placeholder="Postal Code"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="IDnumber">ID number</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="id_card"
                                    id="ide_card"
                                    placeholder="Your ID Number"
                                />
                            </FormGroup>
                        </Col>
                        <Button type="submit" color="primary">Submit</Button>
                    </Row>
                </Form>
            </div>
        )
    }
}