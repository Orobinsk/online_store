import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import FilterBar from "../components/FilterBar";
import PagePagination from "../components/PagePagination";

const Shop = observer(() => {
    const {device} = useContext(Context)
    const [sort, setSort] = useState('lowerPrice')

    useEffect(() => {
        fetchTypes().then(types => device.setTypes(types))
        fetchBrands().then(brands => device.setBrands(brands))
        fetchDevices(JSON.stringify([]), JSON.stringify([]), device.limit, 0,JSON.stringify(device.filterPrice)).then(devices => {
            device.setDevices(devices.devices)
            device.setTotalCount(devices.totalDevices)
        })
        return () => {
            device.setSelectedBrand([])
            device.setSelectedType([])
        }
    }, [])

    useEffect(() => {
        fetchDevices(JSON.stringify(device.selectedType), JSON.stringify(device.selectedBrand), device.limit, device.page - 1,JSON.stringify(device.filterPrice)).then(devices => {
            device.setDevices(devices.devices)
            device.setTotalCount(devices.totalDevices)
        })
    }, [device.page])

    const updateDeviceList = () => {
        fetchDevices(JSON.stringify(device.selectedType), JSON.stringify(device.selectedBrand), device.limit, device.page - 1,JSON.stringify(device.filterPrice)).then(devices => {
            device.setDevices(devices.devices)
            device.setTotalCount(devices.totalDevices)
        })
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                    <FilterBar
                        updateDeviceList={updateDeviceList}
                    />
                </Col>
                <Col md={9}>
                    <Card className={'p-3'}>
                        <Card.Subtitle>сортировка:</Card.Subtitle>

                    </Card>
                    <DeviceList/>
                    <PagePagination/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
