import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PagePagination from "../components/PagePagination";
import SortBar from "../components/SortBar";
import fetchDevicesData from "../utils/fetchDevicesData";
import FilterBar from "../components/FilterBar";

const Shop = observer(() => {
    const {device} = useContext(Context)
    const [showFilter, setShowFilter] = useState(false)
    const handleClose = () => setShowFilter(false)

    useEffect(() => {
        fetchDevicesData(device);
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
                        <Offcanvas.Header
                            closeButton
                            className='d-flex d-lg-none align-items-center justify-content-between ps-2 pe-2'
                            onClick={handleClose}
                        >
                            <Offcanvas.Title>Фильтры </Offcanvas.Title>
                        </Offcanvas.Header>
                        <TypeBar/>
                        <FilterBar
                            closeFilterBar={handleClose}
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
