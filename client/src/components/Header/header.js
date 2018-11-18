import React from 'react';
// import { header } from 'express-validator/check';
// import {Link} from 'react-router-dom';

import "./style.css";
import {Navbar,Nav} from 'react-bootstrap';

// import routes from '../../routes'

const Header =() =>(
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Me Emprega</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/fff">Quem Somos</Nav.Link>
        <Nav.Link href="/Cadastrousuario">Cadastro</Nav.Link>
        <Nav.Link href="/CadastroEmpresa">Cadastro Empresa</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
);

export default Header;
