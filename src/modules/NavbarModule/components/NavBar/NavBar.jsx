import React from 'react';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../../../utils/const";
import {Container, Nav, Navbar} from "react-bootstrap";
import ProfileButtons from "../ProfileButtons/ProfileButtons";
import AdminPanelButton from "../AdminPanelButton/AdminPanelButton";
import BasketButton from "../BasketButton/BasketButton";
import SearchForm from "../SearchForm/SearchForm";

const NavBar = () => {

    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{color: 'white'}}>
                       <SearchForm/>
                        <AdminPanelButton/>
                        <BasketButton/>
                        <ProfileButtons/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
