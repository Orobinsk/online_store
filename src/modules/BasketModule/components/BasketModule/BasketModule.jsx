import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import DeviceItem from "../../../../components/DeviceItem/DeviceItem";
import {SHOP_ROUTE} from "../../../../utils/const";
import OrderConditions from "../OrderConditions/OrderConditions";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {calculatedTotalPrice} from "../../helpers/calculatedtotalPrice";
import fetchData from "../../api/FetchData";

const BasketModule = observer(() => {
    const {device} = useContext(Context);
    const navigate = useNavigate();
    const [devices, setDevices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (device.basket.length) {
            fetchData(device.basket).then(({deviceData}) => {
                setDevices(deviceData);
                setTotalPrice(calculatedTotalPrice(deviceData))
            });
        }
    }, [device.basket]);

    return (
        <div>
            {device.basket.length ? (
                <Row>
                    <Col md={8}>
                        {devices.map((deviceItem) => (
                            <DeviceItem
                                key={deviceItem.id}
                                deviceItem={deviceItem}
                            />
                        ))}
                    </Col>
                    <Col>
                        <OrderConditions devices={devices} totalPrice={totalPrice}/>
                    </Col>
                </Row>
            ) : (
                <Card className={'text-center p-5'}>
                    <Card.Title>Корзина пуста</Card.Title>
                    <Card.Text>Посмотрите предложения на главной странице</Card.Text>
                    <Button onClick={() => navigate(SHOP_ROUTE)}>на главную</Button>
                </Card>
            )}
        </div>
    );
});

export default BasketModule;