import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" id="header" bg="dark">
        <Container fluid>
          <Navbar.Brand id="heading" href="/">
            Conference GO
          </Navbar.Brand>
          <span id="phrase" className="navbar-text text-info italic">
            go to conferences or whatever
          </span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
            <Link className="nav-link" to="/attendeelist">
                Attendee list
              </Link>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/newconference">
                New Conference
              </Link>
              <Link className="nav-link" to="/newlocation">
                New Location
              </Link>
              <Link className="nav-link" to="/newpresentation">
                New Presentation
              </Link>
              <form className="d-flex">
              <a className="btn btn-primary me-2" href="attend-conference.html">Attend!</a>
              <input className="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>

              </form>

              {/* <NavDropdown
                variant="outline-success dark"
                className=" dropdown-menu-dark"
                title="Account"
                id="navbarDropdown"
              > */}
              {/* </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

