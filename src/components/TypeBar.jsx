import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device}=useContext(Context)

    const selectType=(type)=>{
        if (device.selectedType!==type){
            device.setSelectedType(type)
        }
        else  device.setSelectedType('')
    }
    return (
        <ListGroup>
            {device.types.map(type=>
                <ListGroup.Item
                    style={{cursor:"pointer"}}
                    active={type.id=== device.selectedType.id}
                    key={type.id}
                    onClick={()=> selectType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;