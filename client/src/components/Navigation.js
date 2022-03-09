import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate("/");
  }

  return (
    <div style={{width:'100%',margin:'auto'}}>
      {user.username ? ( 
      <Navbar style={{backgroundColor: 'rgb(119, 58, 0)', width:'100%'}} variant='dark'>
        <Container style={{ paddingRight: "2%", width:'100%' }}>
          <Navbar.Brand href="#home" style={{fontSize: '22pt'}} ><strong><img style={{height:'35px'}} alt='field' src="https://cdn.pixabay.com/photo/2018/10/28/13/22/baseball-3778774_960_720.png" />  Put Me In, Coach!  <img style={{height:'35px'}} src="https://cdn.pixabay.com/photo/2012/04/05/01/45/baseball-25761_960_720.png" alt='ball' /></strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/mylineups">My Lineups</Nav.Link>
            <Nav.Link href="/communitylineups">Community Lineups</Nav.Link>
            <Nav.Link href="/simmer">AB Simmer</Nav.Link>
          </Nav>
         <Navbar.Brand id='username' bg="dark" style={{textDecoration: 'underline'}} >Welcome, {user.username}!</Navbar.Brand>
         
            <Button style={{backgroundColor: 'rgb(255, 187, 2)', border:'black'}} variant="light" onClick={handleLogout}>
              Logout
            </Button>
        </Container>
      </Navbar>
     ) : (<Navbar  style={{backgroundColor: 'rgb(119, 58, 0)'}} variant='dark'>
     <Container style={{ paddingRight: "2%" }}>
       <Navbar.Brand style={{marginLeft: 'auto', fontSize:'30pt'}} href="#home"><img style={{height:'45px'}} alt='field' src="https://cdn.pixabay.com/photo/2018/10/28/13/22/baseball-3778774_960_720.png" />  Put Me In, Coach!  <img style={{height:'45px'}} alt='ball' src="https://cdn.pixabay.com/photo/2012/04/05/01/45/baseball-25761_960_720.png" /></Navbar.Brand>
       <Nav className="me-auto">
       </Nav>      
     </Container>
   </Navbar>)  }
    </div>
  );
}

export default Navigation;
