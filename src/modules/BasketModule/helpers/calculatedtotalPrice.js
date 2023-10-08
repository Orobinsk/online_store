export const calculatedTotalPrice = (deviceData) => deviceData.reduce((total, currDevice) => {
    const devicePrice = Number(currDevice.price.replace(/\s+/g, ''));
    if (!isNaN(devicePrice)) {
        return total + devicePrice;
    }
    return total;
}, 0);