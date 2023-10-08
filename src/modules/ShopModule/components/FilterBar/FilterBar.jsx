import React, {useContext, useEffect, useState} from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '../../../../index';
import AccordionBody from 'react-bootstrap/AccordionBody';
import fetchDevicesData from '../../api/fetchDevicesData';
import {PriceFilter} from "./PriceFilter";
import {BrandFilter} from "./BrandFilter";
import {useResetFilters} from "../../hooks/useResetFilters";


const FilterBar = observer(({ closeFilterBar }) => {
    const { device } = useContext(Context);
    const [brands, setBrands] = useState(device.selectedBrand);
    const [price, setPrice] = useState(device.filterPrice);
    const resetFilters = useResetFilters();


    useEffect(()=>{
        setBrands(device.selectedBrand)
        setPrice(device.filterPrice)
    },[device.filterPrice, device.selectedBrand])

    const resetFiltersAndClose = () => {
        resetFilters();
        closeFilterBar();
    };

    const apply = () => {
        device.setSelectedBrand(brands);
        device.setFilterPrice(price);
        fetchDevicesData(device);
        closeFilterBar();
    };

    return (
        <Card className={'p-2'}>
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Производитель</Accordion.Header>
                    <AccordionBody>
                        <BrandFilter brands={brands} setBrands={setBrands}/>
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Цена</Accordion.Header>
                    <AccordionBody>
                        <PriceFilter price={price} setPrice={setPrice} />
                    </AccordionBody>
                </Accordion.Item>
            </Accordion>
            <Button className={'mt-2'} variant={'outline-primary'} onClick={apply}>
                Применить
            </Button>
            <Button
                className={'mt-2'}
                variant={'outline-secondary'}
                onClick={resetFiltersAndClose}
            >
                Сбросить
            </Button>
        </Card>
    );
});

export default FilterBar;
