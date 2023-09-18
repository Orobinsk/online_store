import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/const";
import cls from './DeviceItem.module.scss'

const DeviceItem = ({device,addItemBasket}) => {
    const navigate = useNavigate()
    return (
        <Card className="mt-3 p-3" >
            <Row>
                <Col sm={3} md={3} className={'m-auto'}>
                    <Image fluid src={device.img}/>
                </Col>
                <Col sm={8} md={5} className={'m-auto'}>
                    <Card.Subtitle className="text-black-50">{device.brand}</Card.Subtitle>
                    <div className={cls.itemName}
                        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                    >
                        <Card.Title
                            className="m-auto"
                        >
                            {device.name}
                        </Card.Title>
                        <Card.Text>
                            {device.info.map((info) => `${info.title}:${info.description}`).join(', ').substring(0, 80) + '..'}
                        </Card.Text>
                    </div>
                </Col>
                <Col md={3} className={'m-auto'}>
                    <Card.Title>{device.price} ₽</Card.Title>
                    <Button
                        size={"lg"}
                        className={cls.btnBuy}
                        variant="outline-warning"
                        onClick={()=>addItemBasket(device.id)}
                    >
                        Купить
                    </Button>
                </Col>
            </Row>

        </Card>

    );
};

export default DeviceItem;
