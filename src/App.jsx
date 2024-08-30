
import React from 'react'
import Home from "./components/Home"
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-dark fw-semibold'>Restaurant</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes> 
         <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> 

      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">Copyright @ all rights reserved</p>
      </footer>
    </div>
  )
}

export default App
