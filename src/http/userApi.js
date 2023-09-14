import {$authHost, $host} from "./index";
//import jwt_decode from 'jwt-decode';


export const registration = async (username, password) => {
    const response = await $host.post('/registration', {username, password, role: 'ADMIN'})
    localStorage.setItem('token',JSON.stringify(response.data))
    return response
}

export const login=async(username,password)=>{
    const response=await $host.post('/login', {username,password})
    localStorage.setItem('token',JSON.stringify(response.data))
    return response
}

// export const check = async () => {
//     const response = await $authHost.post('api/auth/registration', {})
//     return response
// }