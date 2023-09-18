import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const selectBrand=(brand)=>{
       if (device.selectedBrand!==brand){
           device.setSelectedBrand(brand)
       }
       else  device.setSelectedBrand('')
    }
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{ width: '18rem',cursor:"pointer" }}
                    key={brand.id}
                    className="p-3"
                    border={brand.id === device.selectedBrand.id?'danger':'light'}
                    onClick={()=>selectBrand(brand)}
                >
                    {brand.name}
                </Card>)}
        </Row>
    );
});

export default BrandBar;