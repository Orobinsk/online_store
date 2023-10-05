import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';


export const registration = async (username, password) => {
    const {data} = await $host.post('auth/registration', {username, password, role: 'user'})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const login = async (username, password) => {
    const {data} = await $host.post('auth/login', {username, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('auth/check');
        localStorage.setItem('token', data);
        return jwt_decode(data);
    } catch (error) {
        console.error('Ошибка в функции check:', error);
    }
}





