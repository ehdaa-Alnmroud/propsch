import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";



const MynavBar = () => {
  return (
    <div>
      {/* navbar react-boots */}
      <Navbar bg="light" variant="light" className="navv">
        <Container>
          <img
            className="logo"
            src="./img/logo.png "
            alt="my logo"
            width={100}
          ></img>
          <Navbar.Brand  href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">about</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
         
          <Button className="bu" variant="outline-secondary">
            {" "}
            Search{" "}
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};
export default MynavBar;
