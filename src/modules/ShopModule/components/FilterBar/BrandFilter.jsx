import {Form} from "react-bootstrap";
import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

export const BrandFilter = observer(({brands,setBrands}) => {
    const { device } = useContext(Context);
    const selectBrand = (brand) => {
        if (!brands.includes(brand)) {
            setBrands([...brands, brand]);
        } else {
            setBrands(brands.filter((oldBrand) => oldBrand !== brand));
        }
    };
    return (
        <Form>
            {device.brands.map((brand) => (
                <Form.Check
                    checked={brands.includes(brand)}
                    key={brand.id}
                    onChange={() => selectBrand(brand)}
                    label={brand.name}
                />
            ))}
        </Form>
    );
});