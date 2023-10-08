import React, {memo} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";

const OrderConditions = ({devices, totalPrice}) => {
    return (
        <Card className={'mt-3 p-3'}>
            <Card.Title>Условия заказа</Card.Title>
            <Card.Body>
                <p>Итого:</p>
                <Row>
                    <Col>
                        <Card.Subtitle>
                            {devices.length}{' '}
                            {devices.length > 1 ? "товара" : "товар"}
                        </Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Subtitle>{totalPrice} ₽</Card.Subtitle>
                    </Col>
                </Row>
                <div className="d-grid">
                    <Button className={'mt-2'}>Перейти к оформлению</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default memo(OrderConditions);