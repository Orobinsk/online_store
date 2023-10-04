import React, {useContext} from 'react';
import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {Context} from "../index";
import {AiOutlineClose} from "react-icons/ai";
import {GiSettingsKnobs} from "react-icons/gi";

const SortBar = ({setShowFilter}) => {
    const {device} = useContext(Context)

    const handleShowFilterClick = () => {
        setShowFilter(true);
    };

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
                            onClick={() => device.setSort('сначала дешевые')}
                        >
                            сначала дешевые
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => device.setSort('сначала дорогие')}
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
                </Button></Col>
            </Row>

            {device.search &&
                <Button
                    variant={"warning"}
                    className={'p-0 mt-2'}
                    onClick={() => device.setSearch('')}
                >
                    поиск: {device.search} <AiOutlineClose/>
                </Button>}
        </Card>
    );
};

export default SortBar;
