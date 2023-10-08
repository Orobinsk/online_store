import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import TypeBar from "../TypeBar/TypeBar";
import FilterBar from "../FilterBar/FilterBar";
import SortBar from "../SortBar/SortBar";
import DeviceList from "../DeviceList/DeviceList";
import PagePagination from "../PagePagination/PagePagination";
import {Context} from "../../../../index";
import fetchDevicesData from "../../api/fetchDevicesData";
import {fetchBrands, fetchTypes} from "../../../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const ShopModule = observer(() => {
    const {device} = useContext(Context)
    const [showFilter, setShowFilter] = useState(false)
    const handleClose = () => setShowFilter(false)

    useEffect(() => {
        fetchDevicesData(device);
        fetchTypes().then((types) => device.setTypes(types));
        fetchBrands().then((brands) => device.setBrands(brands));

        return () => {
            device.setSelectedBrand([]);
            device.setSelectedType([]);
            device.setFilterPrice({min: '', max: ""});
        };
    }, []);


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
                        <FilterBar closeFilterBar={handleClose}/>
                    </Offcanvas>
                </Col>

                <Col lg={9}>
                    <SortBar setShowFilter={setShowFilter}/>
                    <DeviceList />
                    <PagePagination/>
                </Col>
            </Row>
        </Container>
    );
});


export default ShopModule;