import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Badge, Button, Container, Form, InputGroup, Nav, Navbar} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {CgProfile} from "react-icons/cg";
import {MdAdminPanelSettings} from "react-icons/md";

const NavBar = observer(() => {
    const {user, device} = useContext(Context)
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        device.setSearch(searchValue)
    };

    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Form
                            onSubmit={handleSubmit}
                        >
                            <InputGroup className="d-flex mt-1 mt-lg-0">
                                <Form.Control
                                    data-testid={'search'}
                                    type="search"
                                    placeholder="Поиск"
                                    aria-label="Search"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <Button type={"submit"} variant="outline-light"><BsSearch/></Button>
                            </InputGroup>
                        </Form>
                        {user.user && user.user.role === 'admin' &&
                            <Button
                                className="mt-1 ms-lg-2 mt-lg-0"
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                <div className='d-flex align-items-center justify-content-center'>
                              <MdAdminPanelSettings/><span className='ms-1'>Админ панель</span>
                                </div>
                            </Button>
                        }
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(BASKET_ROUTE)}
                            className="mt-1 ms-lg-2 mt-lg-0"
                        >
                            <div className='d-flex align-items-center justify-content-center'>
                                <SlBasket/><span className='ms-1'>Корзина</span>
                                {device.basket.length > 0 &&
                                    <Badge   bg="warning">{device.basket.length}</Badge>
                                }
                            </div>


                        </Button>
                        {user.isAuth ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="mt-1 ms-lg-2 mt-lg-0"
                            >
                                <div className='d-flex align-items-center justify-content-center'>
                                <CgProfile/> <span className='ms-1'>Выйти</span>
                                </div>
                            </Button>
                            :
                            <Button
                                className="mt-1 ms-lg-2 mt-lg-0"
                                variant={"outline-light"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                <div className='d-flex align-items-center justify-content-center'>
                                <CgProfile/>  <span className='ms-1'>Войти</span>
                                </div>
                            </Button>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
});

export default NavBar;
