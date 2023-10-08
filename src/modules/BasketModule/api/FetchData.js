import {fetchOneDevices} from "../../../http/deviceAPI";


const fetchData = async (basket) => {
    const deviceData = await Promise.all(
        basket.map(async (id) => {
            return await fetchOneDevices(id);
        })
    );
return {deviceData}
};

export default fetchData;