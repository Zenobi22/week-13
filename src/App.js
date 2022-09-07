import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        </div>
      );
    }
    

