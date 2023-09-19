import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import {fetchOneDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {BsBasket3} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/const";
import DeviceItem from "../components/DeviceItem/DeviceItem";

const Basket = observer(() => {
    const { device } = useContext(Context);
    const navigate = useNavigate();
    const [devices, setDevices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const deviceData = await Promise.all(
                device.basket.map(async (id) => {
                    return await fetchOneDevices(id);
                })
            );

            setDevices(deviceData);

            const calculatedTotalPrice = deviceData.reduce((total, currDevice) => {
                const devicePrice = Number(currDevice.price.replace(/\s+/g, ''));
                if (!isNaN(devicePrice)) {
                    return total + devicePrice;
                }
                return total;
            }, 0);

            setTotalPrice(calculatedTotalPrice);
        };

        if (device.basket.length) {
            fetchData();
        }
    }, [device.basket]);

    const removeFromBasket = (id) => {
        const filteredDevice = device.basket.filter((deviceId) => deviceId !== id);
        device.setBasket(filteredDevice);
    };

    return (
        <Container>
            <h1>Корзина</h1>
            {device.basket.length ? (
                <Row>
                    <Col md={8}>
                        {devices.map((device) => (
                            <DeviceItem
                                key={device.id}
                                device={device}
                            >
                                <Button
                                    variant="outline-danger"
                                    onClick={() => removeFromBasket(device.id)}
                                >
                                    <BsBasket3/>
                                </Button>
                                <Card.Title>{device.price} ₽</Card.Title>
                            </DeviceItem>
                        ))}
                    </Col>
                    <Col>
                        <Card className={'mb-3 p-3'}>
                            <Card.Title>Условия заказа</Card.Title>
                            <Card.Body>
                                <p>Итого:</p>
                                <Row>
                                    <Col>
                                        <Card.Subtitle>
                                            {devices.length}{' '}
                                            {devices.length > 1 ? "товара" : "товар"}
                                        </Card.Subtitle>
                                    </Col>
                                    <Col>
                                        <Card.Subtitle>{totalPrice} ₽</Card.Subtitle>
                                    </Col>
                                </Row>
                                <div className="d-grid">
                                    <Button className={'mt-2'}>Перейти к оформлению</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <Card className={'text-center p-5'}>
                    <Card.Title>Корзина пуста</Card.Title>
                    <Card.Text>Посмотрите предложения на главной странице</Card.Text>
                    <Button onClick={() => navigate(SHOP_ROUTE)}>на главную</Button>
                </Card>
            )}
        </Container>
    );
});

export default Basket;
