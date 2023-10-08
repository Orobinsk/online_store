import React, {useContext} from 'react';
import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {Context} from "../../../../index";
import {GiSettingsKnobs} from "react-icons/gi";
import {observer} from "mobx-react-lite";
import ClearSearchButton from "./ClearSearchButton";
import ClearFilterPriceButton from "./ClearFilterPriceButton";
import ClearAllFiltersButton from "./ClearAllFiltersButton";
import ClearBrandsButton from "./ClearBrandsButton";
import fetchDevicesData from "../../api/fetchDevicesData";

const SortBar = observer(({setShowFilter}) => {
    const {device} = useContext(Context)

    const handleShowFilterClick = () => {
        setShowFilter(true);
    };

    const sorting=(sort)=>{
        device.setSort(sort)
        device.setPage(1)
        fetchDevicesData(device);
    }
    return (
        <Card className={'p-3 d-flex'}>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle
                            split
                            variant="light"
                            id="dropdown-split-basic"
                            className={'p-0'}
                        >
                            сортировка:<br/>
                            {device.sort}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => sorting('сначала дешевые')}
                            >
                                сначала дешевые
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => sorting('сначала дорогие')}
                            >
                                сначала дорогие
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button
                        variant={'outline-dark'}
                        className='d-block d-lg-none ms-auto'
                        onClick={handleShowFilterClick}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <GiSettingsKnobs/><span className='ms-1'>Фильтр</span>
                        </div>
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
                <Col sm="auto" className="d-flex justify-content-center">
                    <ClearBrandsButton/>
                </Col>
                <Col sm="auto" className="d-flex justify-content-center">
                    <ClearSearchButton/>
                </Col>
                <Col sm="auto" className="d-flex justify-content-center">
                    <ClearFilterPriceButton/>
                </Col>
                <Col sm="auto" className="d-flex justify-content-center">
                    <ClearAllFiltersButton/>
                </Col>
            </Row>
        </Card>
    );
});

export default SortBar;
