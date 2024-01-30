import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import BTCSignals from './pictures/BTCSignals.png';
import Logo from './logo.svg'
import Research from './research/research'
function HomePage() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/research">Research</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
