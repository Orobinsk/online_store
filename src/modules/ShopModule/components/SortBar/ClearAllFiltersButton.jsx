import React, {useContext} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {Button} from "react-bootstrap";
import {useResetFilters} from "../../hooks/useResetFilters";
import fetchDevicesData from "../../api/fetchDevicesData";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const ClearAllFiltersButton = observer(() => {
    const {device} = useContext(Context)
    const resetFilters = useResetFilters();

    const resetFiltersAndSearch=()=>{
        device.setSelectedBrand([]);
        resetFilters();
        device.setSearch('');
        fetchDevicesData(device);
    }
    return (
        (device.selectedBrand.length !==0 || device.search || device.filterPrice.min !== "" || device.filterPrice.max !== "") &&
        <Button
            variant="light"
            className="px-3 mt-2 d-none d-sm-block"
            onClick={resetFiltersAndSearch}
        >

            <span>Сбросить фильтры </span><AiOutlineClose/>
        </Button>
    );
});

export default ClearAllFiltersButton;