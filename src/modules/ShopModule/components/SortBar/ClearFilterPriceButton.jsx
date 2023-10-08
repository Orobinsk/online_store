import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {Context} from "../../../../index";
import fetchDevicesData from "../../api/fetchDevicesData";
import {observer} from "mobx-react-lite";

const ClearFilterPriceButton = observer(() => {
    const {device} = useContext(Context)

    const clearFilterPrice = () => {
        device.setFilterPrice({min: "", max: ""});
        fetchDevicesData(device);
    }
    return (
        (device.filterPrice.min !== "" || device.filterPrice.max !== "") &&
        <Button
            variant={"warning"}
            className={'px-3 mt-2'}
            onClick={clearFilterPrice}
        >
            <span>Цена:</span>
            {device.filterPrice.min !== "" &&
                <span> от {device.filterPrice.min}</span>}
            {device.filterPrice.max !== "" &&
                <span> до {device.filterPrice.max}</span>}
            <AiOutlineClose/>
        </Button>
    );
});

export default ClearFilterPriceButton;