import React, {useCallback, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";


const DeviceBody = observer(({gadget}) => {
    const {device} = useContext(Context);
    const addItemBasket = useCallback((id) => {
        if (!device.basket.includes(id)) {
            device.setBasket([...device.basket, id]);
        } else {
            device.setBasket(device.basket.filter((deviceId) => deviceId !== id));
        }
    }, [device]);

    return (
            <Card className={'p-3'}>
                <Row className={'d-flex align-items-center'}>
                    <Col sm={8} md={4}>
                        <Container>
                            <Image fluid src={gadget.img} alt={gadget.name}/>
                        </Container>
                    </Col>
                    <Col md={5} className={'ms-auto'}>
                        <div className={'d-flex flex-column justify-content-between align-content-between'}>
                            <h2 className="text-black-50 text-end mb-5">{gadget.brand}</h2>
                            <Card>
                                <Card.Body className="d-flex justify-content-between">
                                    <h3>{gadget.price} ₽</h3>
                                    <Button onClick={() => addItemBasket(gadget.id)} size={'lg'}
                                            variant={'outline-success'}>
                                        {device.basket.includes(gadget.id) ? <BsCheckLg/> : 'Купить'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Card>
    );
});

export default DeviceBody;