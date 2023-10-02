import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
 import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Badge, Button, Container, Form, InputGroup, Nav, Navbar} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";

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
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <InputGroup className="d-flex">
                            <Form.Control
                                data-testid={'search'}
                                type="search"
                                placeholder="Поиск"
                                aria-label="Search"
                                value={searchValue}
                                onChange={(e)=>setSearchValue(e.target.value)}
                            />
                            <Button type={"submit"} variant="outline-light"><BsSearch/></Button>
                        </InputGroup>
                    </Form>
                    {user.user.data && user.user.data.role === 'admin' &&
                        <Button
                            className="ms-2"
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                    }
                    <Button
                        variant={"outline-light"}
                        onClick={() => navigate(BASKET_ROUTE)}
                        className="ms-2"
                    >
                        Корзина
                        {device.basket.length > 0 &&
                            <Badge pill bg="warning">{device.basket.length}</Badge>
                        }
                    </Button>
                    {user.isAuth ?
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                        :
                        <Button
                            className="ms-2"
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;
