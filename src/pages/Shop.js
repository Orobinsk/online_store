import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device, user} = useContext(Context)

    useEffect(() => {
        Promise.all([fetchTypes(), fetchBrands(), fetchDevices()])
            .then(([types, brands, devices]) => {
                device.setTypes(types);
                device.setBrands(brands);
                device.setDevices(devices)
            })
            .catch((error) => {
                console.error("Произошла ошибка:", error);
            });
    }, [device])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;