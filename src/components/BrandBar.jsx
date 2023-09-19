import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const selectBrand = (brand) => {
        console.log(device.selectedBrand)
        if (!device.selectedBrand.includes(brand)) {
            device.setSelectedBrand([...device.selectedBrand, brand])
        } else {
            device.setSelectedBrand(device.selectedBrand.filter((oldBrand) => oldBrand !== brand))
        }
    }
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{width: '18rem', cursor: "pointer"}}
                    key={brand.id}
                    className="p-3"
                    border={device.selectedBrand.some((prevBrand) => prevBrand.name.includes(brand.name)) ? 'danger' : 'light'}
                    onClick={() => selectBrand(brand)}
                >
                    {brand.name}
                </Card>)}
        </Row>
    );
});

export default BrandBar;