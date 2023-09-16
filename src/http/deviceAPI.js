import {$authHost, $host} from "./index";
//import jwt_decode from 'jwt-decode';


export const createType = async (type) => {
    const response = await $host.post('/shop/type', type)
    return response
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

export const fetchDevices = async (limit, devicePage) => {
    const response = await $host.get('/shop/devices',{
        params: {
            limit,
            devicePage,
        },
    })
    return response.data
}

export const fetchOneDevices = async (id) => {
    const response = await $host.get('/shop/devices/' + id)
     return response.data
}