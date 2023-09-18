import React from 'react';
import {Button, Card, Col, Image, Row, Stack} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/const";
import cls from './DeviceItem.module.scss'

const DeviceItem = ({device, children}) => {
    const navigate = useNavigate()
    return (
        <Card className="mt-3 p-3" >
            <Row direction="horizontal" gap={3}>
                <Col xs={4} sm={3} md={3} className={'m-auto'}>
                    <Image fluid src={device.img}/>
                </Col>
                <Col xs={8} sm={8} md={5} className={'m-auto'}>
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
                <Col xs={12} sm={8} md={3} className={'d-flex flex-column justify-content-start align-items-end'}>
                    {children}
                </Col>
            </Row>

        </Card>

    );
};

export default DeviceItem;
