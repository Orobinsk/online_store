import React, {memo} from 'react';
import {Card} from "react-bootstrap";

const CharacteristicList = memo(({info, name}) => {
    return (
        <Card className="d-flex flex-column mt-3 p-4">
            <h2>Характеристики {name}</h2>
            {info &&
                info.map((infoItem, index) => (
                    <div
                        key={infoItem.number}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    >
                        {infoItem.title}: {infoItem.description}
                    </div>
                ))}
        </Card>
    );
});

export default CharacteristicList;
