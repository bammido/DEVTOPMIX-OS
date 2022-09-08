import React ,{createContext, useEffect, useState} from 'react'
import jwt, { JwtPayload} from 'jsonwebtoken'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import axios from 'axios'
import {api} from  '../services/api'

export const AuthContext = createContext({} as AuthContextType)

type AuthContextType = {
    signIn: (data: SignInData) => Promise<void>,
    colaborador: Colaborador,
    isAuthenticated: boolean,
    logOut: () => void,
    reqErr:string

}

type SignInData ={
    email: string,
    senha: string
}

type Colaborador = {
    nome: string,
    id: string,
    email: string
}

type TokenData = {
    userId: string | JwtPayload,
    iat: string,
    exp: string
}
export const AuthProvider = ({children})=>{

    const [colaborador, setColaborador] = useState<Colaborador | null>(null)
    const [reqErr, setReqerr] = useState<string>('')

    const isAuthenticated = !!colaborador
    

    useEffect(()=>{
        const {"Colaborador-token": tokenId} = parseCookies()
        if(tokenId) {
            const tokenData = jwt.decode(tokenId)
            const {userId, iat, exp}: any = tokenData || {}

            axios.get(`http://localhost:3003/colaboradores/${userId}`)
            .then(data => setColaborador(data?.data))
            .catch(err => err.response?.data?.message)
        }
    },[])

    const logOut = () => {

    }


    const  signIn = async({email, senha}: SignInData) =>{
        await api.post('/colaboradores/login', 
        {email, senha})
        .then(data => {
            console.log(data)
            setColaborador(data.data.colaboradorData)
            setCookie(undefined, 'Colaborador-token', data.data.token,  {
                maxAge: 60 * 60 * 1 /* 1H */
            })
            api.defaults.headers['Authorization'] = `${data.data.token}`
            email==='admin@admin.com'? Router.push('/gestor/ordens-de-servico') :Router.push('/colaborador/nova-ordem-de-servico')
        })
        .catch(error => setReqerr(error.response?.data?.message))
        
    }

    return <AuthContext.Provider value={{signIn, colaborador, isAuthenticated, logOut, reqErr}}>
        {children}
    </AuthContext.Provider>
}

