import React, {useEffect} from 'react'
import {parseCookies} from 'nookies'
import Router from 'next/router'

const useProtectedPage = (update?) =>{
    useEffect(()=>{
        const {"Colaborador-token": token} = parseCookies()

        if(!token){
            Router.push('/login')
        }
    },[update])
}

export default useProtectedPage