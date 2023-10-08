import fetchDevicesData from "../api/fetchDevicesData";
import {useContext} from "react";
import {Context} from "../../../index";

export function useResetFilters () {
    const { device } = useContext(Context);

    return () => {
        device.setFilterPrice({min: "", max: ""});
        device.setSelectedBrand([]);
        fetchDevicesData(device);
    };
}