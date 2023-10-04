import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import FilterBar from "../components/FilterBar";
import PagePagination from "../components/PagePagination";
import SortBar from "../components/SortBar";

const Shop = observer(() => {
    const {device} = useContext(Context)
    const [showFilter, setShowFilter] = useState(false)

    const handleClose = () => setShowFilter(false)

    const fetchData = async () => {
        try {
            const [devices] = await Promise.all([
                fetchDevices(
                    device.search,
                    JSON.stringify(device.selectedType),
                    JSON.stringify(device.selectedBrand),
                    device.limit,
                    device.page - 1,
                    JSON.stringify(device.filterPrice),
                    device.sort
                ),
            ]);
            device.setDevices(devices.devices);
            device.setTotalCount(devices.totalDevices);
        } catch (error) {
            console.error("Ошибка при получении данных устройств:", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchTypes().then(types => device.setTypes(types))
        fetchBrands().then(brands => device.setBrands(brands))
        return () => {
            device.setSelectedBrand([]);
            device.setSelectedType([]);
            device.setFilterPrice({min: 0, max: 1000000});
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, [device.search, device.page, device.sort]);

    return (
        <Container>
            <Row className="mt-2">
                <Col lg={3}>
                    <Offcanvas
                        show={showFilter}
                        responsive="lg"
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton className='d-flex d-lg-none align-items-center justify-content-between ps-2 pe-2' onClick={handleClose}>
                            <Offcanvas.Title>Фильтры </Offcanvas.Title>
                        </Offcanvas.Header>
                        <TypeBar/>
                        <FilterBar
                            updateDeviceList={fetchData}
                        />
                    </Offcanvas>

                </Col>
                <Col lg={9}>
                    <SortBar setShowFilter={setShowFilter}/>
                    <DeviceList/>
                    <PagePagination/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
