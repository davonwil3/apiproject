import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Navbars(props){

var [search , setSearch] = React.useState()

function searchArticle(event){
  event.preventDefault()
  props.search(search)

}


return(

    <Navbar  expand="lg" variant='dark' className="nav-container justify-content-between">

    <Navbar.Brand href="#home">US Headlines</Navbar.Brand>
    <Form inline className="search-container"  onSubmit={searchArticle}>
        
            <FormControl type="text" placeholder="Search"  style={{width:'300px'}} placeholder="Search Article Topics" onChange= {e => setSearch(e.target.value) }/>
            <Button type="submit"  onClick={()=> props.search(search)}>Submit</Button>

    </Form>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ml-auto">
        <Nav.Link className="navlink-color"  onClick={()=> props.function('business')}>Buisness</Nav.Link>
        <Nav.Link className="navlink-color"  onClick={()=> props.function('entertainment')}>Entertainment</Nav.Link>
        <Nav.Link className="navlink-color"  onClick={()=> props.function('sports')}>Sports</Nav.Link>
        <Nav.Link className="navlink-color"  onClick={()=> props.function('technology')}>Technology</Nav.Link>
        
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>




)
}

export default Navbars