import React, {useContext, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";
import {Context} from "../../../../index";
import fetchDevicesData from "../../../ShopModule/api/fetchDevicesData";
import {observer} from "mobx-react-lite";

const SearchForm = observer(() => {
    const [searchValue, setSearchValue] = useState('');
    const {device} = useContext(Context)
    const handleSubmit = (e) => {
        e.preventDefault();
        device.setSearch(searchValue)
        fetchDevicesData(device);
    };
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <InputGroup className="d-flex mt-1 mt-lg-0">
                <Form.Control
                    data-testid={'search'}
                    type="search"
                    placeholder="Поиск"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button type={"submit"} variant="outline-light"><BsSearch/></Button>
            </InputGroup>
        </Form>
    );
});

export default SearchForm;