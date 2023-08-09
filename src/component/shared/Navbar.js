import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as IMG from '../images/img'

function NavBar() {
  return (
 
    <Navbar collapseOnSelect expand="md"  className='fixed-top me py-2'>
      <Container className="navbg  rounded-4" >
        <Navbar.Brand href="/" as={Link}>
           <img src={IMG.Logo} alt='logo' className='logoImg'/><span className='ms-2 logo'>Present AI</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link  as={Link} className='nav'>How it works</Nav.Link>
            <Nav.Link as={Link} className='nav'>Key features</Nav.Link>
            <Nav.Link as={Link} className='nav'>About Us</Nav.Link>
            <Nav.Link as={Link} className='nav'>Contact Us</Nav.Link>
          </Nav>
          <Button className='signIn d-block px-sm-2 px-md-3 ms-auto border-0 text-dark' style={{ outline: 'none' }}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;