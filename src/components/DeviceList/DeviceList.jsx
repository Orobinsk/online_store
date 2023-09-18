import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Button, Card, Container, Row} from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import cls from './DeviceList.module.scss'

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    const addItemBasket=(id)=>{
        if(!device.basket.includes(id)){
            device.setBasket([...device.basket,id])
        }
    }

    return (
        <div>
            {device.devices.length?
                device.devices.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                >
                    <Card.Title>{device.price} ₽</Card.Title>
                    <Button
                        size={"lg"}
                        className={cls.btnBuy}
                        variant="outline-warning"
                        onClick={()=>addItemBasket(device.id)}
                    >
                        Купить
                    </Button>
                </DeviceItem>
            ):
                <Container>
                    <h1>Странно, но ничего нет</h1>
                    <p>Попробуйте изменить критерии поиска</p>
                </Container>
            }
        </div>
    );
});

export default DeviceList;
