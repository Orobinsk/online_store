import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {fetchOneDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {BsBasket3} from "react-icons/bs";
import {MdCurrencyRuble} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/const";


const Basket = observer(() => {
    const {device} = useContext(Context)
    const navigate=useNavigate()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const deviceData = await Promise.all(
                device.basket.map(async (id) => {
                    return await fetchOneDevices(id);
                })
            );
            device.setDevices(deviceData)

            const calculatedTotalPrice = deviceData.reduce(
                (acc, currDevice) => acc + Number(currDevice.price), 0
            );
           deviceData.forEach((device)=>{
                console.log(device.price)
            })
            setTotalPrice(calculatedTotalPrice);
        };
        if (device.basket.length) {
            fetchData()
        }
    }, [device.basket]);

    const removeFromBasket = (id) => {
        const filteredDevice = device.basket.filter((deviceId) => deviceId !== id)
        device.setBasket(filteredDevice)
    }

    return (
        <Container>
            <h1>Корзина</h1>
            {device.basket.length ?
                <Row>
                    <Col md={8}>
                        {device.devices.map((device) =>
                            <Card key={device.id} className={'mb-3 p-3'}>
                                <Row>
                                    <Col sm={5}>
                                        <Image width={150} height={150} src={device.img}/>
                                    </Col>
                                    <Col>
                                        <Card.Title>{device.name}</Card.Title>
                                        <Card.Subtitle>{device.price} <MdCurrencyRuble/></Card.Subtitle>
                                    </Col>
                                    <Col sm={1}>
                                        <BsBasket3 onClick={() => removeFromBasket(device.id)}/>
                                    </Col>
                                </Row>
                            </Card>
                        )}
                    </Col>
                    <Col>
                        <Card className={'mb-3 p-3'}>
                            <Card.Title>Условия заказа</Card.Title>
                            <Card.Body>
                                <p>Итого:</p>
                                <Row>
                                    <Col>
                                        <Card.Subtitle>{device.devices.length} {device.devices.length > 1 ? "товара" : "товар"} </Card.Subtitle></Col>
                                    <Col><Card.Subtitle>{totalPrice} <MdCurrencyRuble/></Card.Subtitle></Col>
                                </Row>
                                <Button className={'mt-2'}>Перейти к оформлению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                :
                <Card className={'text-center p-5'}>
                    <Card.Title>Корзина пуста</Card.Title>
                    <Card.Text>Посмотрите предложения на главной странице</Card.Text>
                    <Button onClick={()=>navigate(SHOP_ROUTE)} >на главную</Button>
                </Card>
            }
        </Container>
    );
});

export default Basket;
