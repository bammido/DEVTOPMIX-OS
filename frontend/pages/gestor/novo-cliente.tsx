import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, {useState} from 'react'
import NewClientForm from '../../Components/newClient/NewClientForm'
import useForm from '../../hooks/UseForm'
import useRequestMsg from '../../hooks/useRequestMsg'
import { api } from '../../services/api'
import jwt from 'jsonwebtoken'
import NavBar from '../../Components/NavBar/NavBar'

const NewClient = ()=>{

    const {msg, setMsg} = useRequestMsg()

    const [form, onChange] = useForm({
        nome: ''
    })

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        api.post('clientes', {
            nome
        })
        .then(data => setMsg({msg: 'cliente criado com sucesso!', color: 'green'}) )
        .catch(error => setMsg({msg: error.response?.data?.message, color: 'red'}))
    }

    const {nome} = form || {}
    
    return <div className='Centralizer' style={{flexDirection: 'column'}}>
        <NavBar />
        <h1 className='Title'>Dados do novo cliente:</h1>
        <span style={{color: `${msg.color}`}}>{msg.msg}</span>
        <NewClientForm handleOnSubmit={handleOnSubmit} onChange={onChange} value={nome}/>
    </div>
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
    
    const {"Colaborador-token": token} =  parseCookies(ctx)
    
    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    
    const {userEmail}: any = jwt && jwt.decode(token)
    
    if(userEmail!== 'admin@admin.com') {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    
    return {
        props: {
            
        }
    }
}

export default NewClient
