import React, { useRef, useEffect } from 'react'
import { GenerateToken } from '../services/APIService';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import IndexStudent from './student';

export default function Index(){
    const didRun = useRef(false);
    useEffect(() => {
        if(!didRun.current){
            GenerateToken();
            didRun.current = true;
        }
    }, [])
    return(
        <BrowserRouter>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Link className="navbar-brand" to="/">React with Redux</Link>
                <Navbar.Toggle aria-controls="menu"></Navbar.Toggle>
                <Navbar.Collapse id="menu">
                <Nav className="mr-auto">
                    <Link className="nav-item nav-link" to="/student">Student</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
            <Route exact path="/" render={() => {
                return(<div>Main Screen</div>);
            }}></Route>
            <Route exact path="/student" component={IndexStudent}/>
        </BrowserRouter>
    )
}
