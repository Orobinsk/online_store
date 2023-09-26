import {$host} from "./index";
//import jwt_decode from 'jwt-decode';


export const createType = async (type) => {
    return await $host.post('/shop/type', type)
}

export const createBrand = async (brand) => {
    const response = await $host.post('/shop/brand', brand)
    return response.data
}

export const createDevice = async (device) => {
    const response = await $host.post('/shop/device', device)
    return response.data
}

export const fetchTypes = async () => {
    const response = await $host.get('/shop/types')
    return response.data
}

export const fetchBrands = async () => {
    const response = await $host.get('/shop/brands')
    return response.data
}

export const fetchDevices = async (typeName,brandName,limit, devicePage,filterPrice) => {
    const response = await $host.get('/shop/devices',{
        params: {
            typeName,
            brandName,
            limit,
            devicePage,
            filterPrice
        },
    })
    return response.data
}

export const fetchOneDevices = async (id) => {
    const response = await $host.get('/shop/devices/' + id)
     return response.data
}
