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
              <Link className="nav-link" to="/conferences/new">
                New Conference
              </Link>
              <Link className="nav-link" to="/attendees/new">
                Attend Conference
              </Link>
              <Link className="nav-link" to="/locations/new">
                New Location
              </Link>
              <Link className="nav-link" to="/attendees">
                Attendee List
              </Link>
              <Link className="nav-link" to="/presentations/new">
                New Presentation
              </Link>
              <Link className="nav-link" to="/login">
                Login
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
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
              <button className="btn btn-outline-success me-2" type="submit">Search</button>
              <a className="btn btn-primary" href="attend-conference.html">Attend!</a>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

