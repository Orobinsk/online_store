import {fetchDevices} from "../../../http/deviceAPI";

const fetchDevicesData = async (device) => {
    try {
        const [devices] = await Promise.all([
            fetchDevices(
                device.search,
                JSON.stringify(device.selectedType),
                JSON.stringify(device.selectedBrand),
                device.limit,
                device.page - 1,
                JSON.stringify(device.filterPrice),
                device.sort
            ),
        ]);
        device.setDevices(devices.devices);
        device.setTotalCount(devices.totalDevices);
    } catch (error) {
        console.error("Ошибка при получении данных устройств:", error);
    }
};

export default fetchDevicesData