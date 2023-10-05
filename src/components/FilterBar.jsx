import React, {useContext, useEffect, useState} from 'react';
import {Accordion, Button, Card, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AccordionBody from "react-bootstrap/AccordionBody";
import fetchDevicesData from "../utils/fetchDevicesData";
import {fetchBrands, fetchTypes} from "../http/deviceAPI";

const FilterBar = observer(({closeFilterBar}) => {
    const {device} = useContext(Context);
    const [brands, setBrands] = useState(device.selectedBrand)
    const [price, setPrice] = useState({
        min: '',
        max: ''
    })

    useEffect(() => {
        fetchTypes().then(types => device.setTypes(types))
        fetchBrands().then(brands => device.setBrands(brands))
        return () => {
            device.setSelectedBrand([]);
            device.setSelectedType([]);
            device.setFilterPrice({min: 0, max: 1000000});
        };
    }, []);

    const selectBrand = (brand) => {
        if (!brands.includes(brand)) {
            setBrands([...brands, brand]);
        } else {
            setBrands(brands.filter((oldBrand) => oldBrand !== brand));
        }
    };

    const resetFilters = () => {
        setBrands([]);
        setPrice({
            min: '',
            max: ''
        });
        device.setFilterPrice({min: 0, max: 1000000})
        device.setSelectedBrand([]);
        fetchDevicesData(device);
        closeFilterBar()
    };

    const apply = () => {
        device.setSelectedBrand(brands)
        device.setFilterPrice(price)
        fetchDevicesData(device);
        closeFilterBar()
    }

    return (
        <Card className={'p-2'}>
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Производитель
                    </Accordion.Header>
                    <AccordionBody>
                        <Form>
                            {device.brands.map(brand =>
                                <Form.Check
                                    checked={brands.includes(brand)}
                                    key={brand.id}
                                    onChange={() => selectBrand(brand)}
                                    label={brand.name}
                                />
                            )}
                        </Form>
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Цена
                    </Accordion.Header>
                    <AccordionBody>
                        <Form className='d-flex'>
                            <Form.Control
                                type='number'
                                placeholder="от"
                                min='0'
                                value={price.min}
                                onChange={e => setPrice({...price, min: e.target.value})}
                            />
                            <Form.Control
                                type='number'
                                placeholder="до"
                                min='0'
                                value={price.max}
                                onChange={e => setPrice({...price, max: e.target.value})}
                            />
                        </Form>
                    </AccordionBody>
                </Accordion.Item>
            </Accordion>
            <Button
                className={'mt-2'}
                variant={"outline-primary"}
                onClick={apply}
            >
                Применить
            </Button>
            <Button
                className={'mt-2'}
                variant={"outline-secondary"}
                onClick={resetFilters}
            >
                Сбросить
            </Button>

        </Card>
    );
});

export default FilterBar;
