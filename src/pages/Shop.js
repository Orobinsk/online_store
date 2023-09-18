import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(types => device.setTypes(types))
        fetchBrands().then(brands => device.setBrands(brands))
        fetchDevices(null,null,device.limit,0).then(devices => {
            device.setDevices(devices.devices)
             device.setTotalCount(devices.totalDevices)
        })
    }, [])

    useEffect(()=>{
        fetchDevices(device.selectedType.name, device.selectedBrand.name,device.limit,device.page-1).then(devices => {
            device.setDevices(devices.devices)
            device.setTotalCount(devices.totalDevices)
        })
    },[device.page,device.selectedType, device.selectedBrand])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;