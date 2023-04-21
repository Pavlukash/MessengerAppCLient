import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginComponent from "./components/login.component";
import RegisterComponent from "./components/register.component";
import './App.css';

const App: React.FC = () => {
  return (
      <Router>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about">About</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="/dropdown/item1">Item 1</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/dropdown/item2">Item 2</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item as={Link} to="/dropdown/item3">Item 3</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Nav>
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Routes>
              <Route path="/" element={<h1>Welcome to My App!</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="/dropdown/item1" element={<h1>Dropdown Item 1</h1>} />
              <Route path="/dropdown/item2" element={<h1>Dropdown Item 2</h1>} />
              <Route path="/dropdown/item3" element={<h1>Dropdown Item 3</h1>} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
          </Routes>
      </Router>
  );
};

export default App;

// <Router>
//   <Navbar bg="light" expand="lg">
//     <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">
//         <Nav.Link as={Link} to="/login">Login</Nav.Link>
//         <Nav.Link as={Link} to="/register">Register</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
//   <Routes>
//     <Route path="/" element={<h1>Welcome to my App!</h1>} />
//     <Route path="/login" element={<LoginComponent/>} />
//     <Route path="/register" element={<RegisterComponent/>}/>
//   </Routes>
// </Router>

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
