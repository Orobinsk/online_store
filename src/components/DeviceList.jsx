import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Container} from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";
import {BsCheckLg} from "react-icons/bs";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    const addItemBasket = (id) => {
        if (!device.basket.includes(id)) {
            device.setBasket([...device.basket, id])
        } else {
            device.setBasket(device.basket.filter((deviceId)=>deviceId!== id))
        }
    }
    return (
        <div>
            {device.devices.length ?
                device.devices.map(deviceItem =>
                    <DeviceItem
                        key={deviceItem.id}
                        device={deviceItem}
                    >
                        <Card.Title>{deviceItem.price} ₽</Card.Title>
                        <Button
                            variant="outline-success"
                            size={"lg"}
                            onClick={() => addItemBasket(deviceItem.id)}
                        >
                            {device.basket.includes(deviceItem.id) ?
                                <BsCheckLg/> :"Купить"
                            }
                        </Button>
                    </DeviceItem>
                ) :
                <Container>
                    <h1>Странно, но ничего нет</h1>
                    <p>Попробуйте изменить критерии поиска</p>
                </Container>
            }
        </div>
    );
});

export default DeviceList;
