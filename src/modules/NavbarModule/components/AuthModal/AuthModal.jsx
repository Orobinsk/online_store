import React, {useContext, useState} from 'react';
import {Button, Card, Form, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../../../../index";
import {login, registration} from "../../../../http/userApi";
import {observer} from "mobx-react-lite";

const AuthModal = observer(({show, onHide}) => {
    const [isLogin, setIsLogin] = useState(true)
    const {user} = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(username, password)
            } else {
                data = await registration(username, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            onHide()
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Card className="p-4 m-1">
                <Card.Title className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</Card.Title>
                <Card.Body>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <Link onClick={() => setIsLogin(false)}>Зарегистрируйся!</Link>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <Link onClick={() => setIsLogin(true)}>Войдите!</Link>
                                </div>
                            }
                            <Button
                                className='mt-3'
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Modal>
    );
});

export default AuthModal;