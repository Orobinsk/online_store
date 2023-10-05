import React, {useContext} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/const";
import cls from './DeviceItem.module.scss'
import {BsCheckLg} from "react-icons/bs";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const DeviceItem = observer(({deviceItem}) => {
    const {device} = useContext(Context)
    const navigate = useNavigate()

    const addItemBasket = (id) => {
        if (!device.basket.includes(id)) {
            device.setBasket([...device.basket, id])
        } else {
            device.setBasket(device.basket.filter((deviceId)=>deviceId!== id))
        }
    }

    return (
        <Card className="mt-3 p-3" >
            <Row direction="horizontal" gap={3}>
                <Col xs={4} sm={3} md={3} className={'m-auto'}>
                    <Image fluid src={deviceItem.img}/>
                </Col>
                <Col xs={8} sm={8} md={5} className={'m-auto'}>
                    <Card.Subtitle className="text-black-50">{deviceItem.brand}</Card.Subtitle>
                    <div
                        className={cls.itemName}
                        onClick={() => navigate(DEVICE_ROUTE + '/' + deviceItem.id)}
                    >
                        <Card.Title
                            className="m-auto"
                        >
                            {deviceItem.name}
                        </Card.Title>
                        <Card.Text>
                            {deviceItem.info.map((info) => `${info.title}:${info.description}`).join(', ').substring(0, 80) + '..'}
                        </Card.Text>
                    </div>
                </Col>
                <Col  md={3} className={'d-flex flex-column justify-content-start align-items-end'}>
                    <Card.Title>{deviceItem.price} ₽</Card.Title>
                    <Button
                        variant="outline-success"
                        size={"lg"}
                        onClick={() => addItemBasket(deviceItem.id)}
                    >
                        {device.basket.includes(deviceItem.id) ? <BsCheckLg /> : "Купить"}
                    </Button>
                </Col>
            </Row>
        </Card>
    );
});

export default DeviceItem;
