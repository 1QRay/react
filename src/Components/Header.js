import React, { Component } from "react";
import {
  Button,
  FormControl,
  Nav,
  Navbar,
  Form,
  Container,
} from "react-bootstrap";
import logo from "./logo.png";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              RECRUITMENT HALL LTD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="link-info">
                <Nav.Link href="/work" className="text-light"> Работа </Nav.Link>
                <Nav.Link href="/info" className="text-light"> О нас </Nav.Link>
                <Nav.Link href="/contacts" className="text-light"> Контакты </Nav.Link>
                <Nav.Link href="https://find-and-update.company-information.service.gov.uk/company/13331104" className="text-light"> Лицензия </Nav.Link>
              </Nav>
              {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
