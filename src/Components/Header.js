import React,{useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="info" light expand="md" className="border-bottom border-white fixed-top">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    Event App
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white text-center"> {context.user?.email ? `Welcome ${context.user.email} !` : ""}</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white border border-thick border-white rounded-pill py-2 px-3 m-2 h6 my-btn ">Logout</NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/signin" className="text-white border border-thick border-white rounded-pill py-2 px-3 m-2 h6">Sign In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className="text-white border border-white rounded-pill py-2 px-3 m-2 h6">Sign Up</NavLink>
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
