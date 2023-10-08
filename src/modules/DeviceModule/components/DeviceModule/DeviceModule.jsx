import React, {useEffect, useState} from 'react';
import CharacteristicList from "../CharacteristicList/CharacteristicList";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../../../../http/deviceAPI";
import DeviceBody from "../DeviceBody/DeviceBody";


const DeviceModule = () => {
    const [gadget, setGadget] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOneDevices(id);
                setGadget(data);
            } catch (error) {
                console.error('Error fetching device data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <Container className="mt-3">
            <h1>{gadget.name}</h1>
            <DeviceBody gadget={gadget}/>
            <CharacteristicList info={gadget.info} name={gadget.name}/>
        </Container>
    );
};

export default DeviceModule;