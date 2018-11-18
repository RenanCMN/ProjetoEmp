import React,{Component} from "react";
// import Api from "../../services/api"
import {Form,Button} from "react-bootstrap";


export default  class Cadastro extends Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
       
        fetch('http://localhost:3001/usuario', {
          method: 'POST',
          body: data,
        });
        console.log(fetch);
    }
    render(){
        
        return (
            <Form className="container"  onSubmit={this.handleSubmit} >
                <Form.Group controlId="formGroupNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" name="Nome" placeholder="Nome" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="Email" placeholder="Email"/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="Senha" placeholder="Senha" />
                </Form.Group>
                <button>Send data!</button>
            </Form>
        )
    }
}
