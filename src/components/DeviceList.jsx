import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <div>
            {device.devices.length ?
                device.devices.map(deviceItem =>
                    <DeviceItem
                        key={deviceItem.id}
                        deviceItem={deviceItem}
                    />
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
