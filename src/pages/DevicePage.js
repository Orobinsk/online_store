import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceAPI";
import {Context} from "../index";
import {BsCheckLg} from "react-icons/bs";
import {observer} from "mobx-react-lite";


const DevicePage = observer(() => {
    const {device} = useContext(Context)
    const [gadget, setGadget] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data =>
            setGadget(data)
        )
    }, [])

    const addItemBasket = (id) => {
        if (!device.basket.includes(id)) {
            device.setBasket([...device.basket, id])
        } else {
            device.setBasket(device.basket.filter((deviceId) => deviceId !== id))
        }
    }

    return (
        <Container className="mt-3">
            <h1>{gadget.name}</h1>
            <Card className={'p-4'}>
                <Row className={'d-flex align-items-center'}>

                    <Col>
                        <Image width={300} height={300} src={gadget.img}/>
                    </Col>
                    <Col md={5}>
                        <div  className={'d-flex flex-column justify-content-between align-content-between'}>
                            <h2 className="text-black-50 text-end mb-5">{gadget.brand}</h2>
                            <Card>
                                <Card.Body className="d-flex justify-content-between">
                                    <h3>{gadget.price} ₽</h3>
                                    <Button
                                        onClick={() => addItemBasket(gadget.id)}
                                        size={"lg"} variant={"outline-success"}
                                    >
                                        {device.basket.includes(gadget.id) ?
                                            <BsCheckLg/> : "Купить"
                                        }
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </Card>

            <Card className="d-flex flex-column mt-3 p-4">
                <h2>Характеристики {gadget.name}</h2>
                {gadget.info ?
                    gadget.info.map((info, index) =>
                        <Row
                            key={info.number}
                            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                        >
                            {info.title}: {info.description}
                        </Row>
                    ) : null}
            </Card>
        </Container>
    );
});

export default DevicePage;
