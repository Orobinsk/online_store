import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    const selectType = (type) => {
        if (!device.selectedType.includes(type)) {
            device.setSelectedType([...device.selectedType, type])
        } else {
            device.setSelectedType(device.selectedType.filter((oldType) => oldType !== type))
        }
    }
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={device.selectedType.some((prevType) => prevType.name.includes(type.name))}
                    key={type.id}
                    onClick={() => selectType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
