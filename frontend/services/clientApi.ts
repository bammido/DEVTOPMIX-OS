import axios from "axios";
import { parseCookies } from 'nookies'

export const ClientApi = (ctx?)=>{
const {"Colaborador-token": token} = parseCookies(ctx)

const api =  axios.create({
    baseURL: 'http://localhost:3003'
})

api.interceptors.request.use(config =>{
    console.log(config)
    return config
    })

if (token) {
    api.defaults.headers['Authorization'] = `${token}`
}
return api
}
