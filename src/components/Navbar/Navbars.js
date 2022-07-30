import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import {Link} from 'react-router-dom';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

const Navbars = () => {
  return (
    <div>
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand style={{backgroundColor:"blueviolet",borderRadius:10,width:200}}><Link style={{color:"white"}} to="/">DreadNought <RocketLaunchRoundedIcon  /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{color:'white'}} to="/feature">Feature of Dn</Link></Nav.Link>
            <Nav.Link><Link style={{color:'white'}} to="/about">AboutUs</Link></Nav.Link>
            <Nav.Link><Link style={{color:'white'}} to="/contact">Contact Us</Link></Nav.Link> 
          </Nav> 
          <Nav>
              <Link to='/signup'><Button style={{backgroundColor:"black"}}>SignUp</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars;