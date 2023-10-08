import {Form} from "react-bootstrap";
import React from "react";

export const PriceFilter = ({ price, setPrice }) => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="number"
                placeholder="от"
                min="0"
                value={price.min}
                onChange={(e) => setPrice({ ...price, min: e.target.value })}
            />
            <Form.Control
                type="number"
                placeholder="до"
                min="0"
                value={price.max}
                onChange={(e) => setPrice({ ...price, max: e.target.value })}
            />
        </Form>
    );
};