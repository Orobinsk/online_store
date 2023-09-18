import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    const addItemBasket=(id)=>{
        if(!device.basket.includes(id)){
            device.setBasket([...device.basket,id])
        }
        console.log(device.basket)
    }

    return (
        <div>
            {device.devices.length?
                device.devices.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                    addItemBasket={addItemBasket}
                />
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
