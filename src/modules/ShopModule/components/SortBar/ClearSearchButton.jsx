import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import fetchDevicesData from "../../api/fetchDevicesData";

const ClearSearchButton = observer(() => {
    const {device} = useContext(Context)
    const clearSearch=()=>{
        device.setSearch('');
        fetchDevicesData(device);
    }
    return (
        device.search &&
                <Button
                    variant={"warning"}
                    className={'px-3 mt-2'}
                    onClick={clearSearch}
                >

                  <span>поиск: {device.search} <AiOutlineClose/></span>
                </Button>
    );
});

export default ClearSearchButton;