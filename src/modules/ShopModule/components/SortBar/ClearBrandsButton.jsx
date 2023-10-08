import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {Context} from "../../../../index";
import fetchDevicesData from "../../api/fetchDevicesData";
import {observer} from "mobx-react-lite";

const ClearBrandsButton = observer(() => {
    const {device} = useContext(Context)
    const clearSelectedBrands=()=>{
        device.setSelectedBrand([]);
        fetchDevicesData(device);
    }
    const SelectedBrands=device.selectedBrand.map((brand)=>brand.name).join(", ")
    return (
        device.selectedBrand.length !==0 &&
        <Button
            variant={"warning"}
            className={'px-3 mt-2'}
            onClick={clearSelectedBrands}
        >
            <span>Производитель: {SelectedBrands} <AiOutlineClose/></span>
        </Button>
    );
});

export default ClearBrandsButton;