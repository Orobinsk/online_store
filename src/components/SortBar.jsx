import React, {useContext} from 'react';
import {Button, Card, Dropdown} from "react-bootstrap";
import {Context} from "../index";
import {AiOutlineClose} from "react-icons/ai";

const SortBar = () => {
    const {device} = useContext(Context)

    return (
        <Card className={'p-3 d-flex'}>
            <Dropdown>
                <Dropdown.Toggle
                    split
                    variant="light"
                    id="dropdown-split-basic"
                    className={'p-0'}
                >
                    сортировка: {device.sort}
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
            {device.search &&
                <Button
                    variant={"warning"}
                    className={'p-0 mt-2'}
                    onClick={()=>device.setSearch('')}
                >
                    поиск: {device.search} <AiOutlineClose/>
                </Button>}
        </Card>
    );
};

export default SortBar;