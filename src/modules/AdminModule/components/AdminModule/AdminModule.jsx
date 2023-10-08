import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrandModal from "../CreateBrandModal/CreateBrandModal";
import CreateDeviceModal from "../CreateDeviceModal/CreateDeviceModal";
import CreateTypeModal from "../CreateTypeModal/CreateTypeModal";

const AdminModule = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrandModal show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDeviceModal show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateTypeModal show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default AdminModule;