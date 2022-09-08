import React, {useContext, useState, useEffect} from "react";
import { GetServerSideProps } from "next";
import Router from '../../node_modules/next/router'

import NewServiceOrderForm from "../../Components/NewServiceOrder/NewServiceOrderForm";
import { AuthContext } from "../../Context/SignInCtx";
import {parseCookies} from 'nookies'
import useRequestMsg from "../../hooks/useRequestMsg";
import useForm from "../../hooks/UseForm";
import {api} from  '../../services/api'

type Cliente = {
    id: string,
    nome: string
}

function  NewServiceOrder({ctx}){

    const {colaborador, logOut} = useContext(AuthContext)
    const {email, "id":colaboradorId, nome} = colaborador || {}

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [selectedClienteId, setSelectedClienteId] = useState<string>(
        clientes?.length? clientes[0].id 
        :
         '')

    const [form , onChange] = useForm({
        texto: ''
    })

    const {texto} = form

    const {msg, setMsg} = useRequestMsg() 

    useEffect(()=>{
        api.get('/clientes')
        .then(data => {
            console.log(data)
            setClientes(data.data.clientes)})
            .catch(error => setMsg({msg: error.response?.data?.message, color: 'red'}))
    },[])

    console.log(clientes)

    const handleOnchange = (e) =>{
        const nomeCliente = e.target.value

        const selected = clientes.find( ({nome})  => nome === nomeCliente)

        setSelectedClienteId(selected.id)
    }
    
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        api.post('ordens-de-servico',{
            texto,
            colaborador: colaboradorId,
            cliente: selectedClienteId
        })
        .then(data => setMsg({msg:'ordem de servico cirada com sucesso!', color: 'green'}))
        .catch(error => setMsg({msg: error.response.data.message, color: 'red'}))
    }

    

    console.log('colaborador',colaborador)

    return <div className="Centralizer" style={{flexDirection: "column"}}>
        <div className="MainDivNav">
            <nav className="Nav" style={{justifyContent:'center',width: '450px'}}>
                <button onClick={()=>Router.push('/')} className="NavButton">Home</button>
            </nav>
        </div>
        <span style={{color: msg.color}}>{msg.msg}</span>
        <NewServiceOrderForm
        texto={form.texto} 
        handleOnchangeSelect={handleOnchange} 
        onChange={onChange}
        clientes={clientes} 
        handleOnSubmit={handleOnSubmit} 
        colaborador={{email, nome}}/>
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

    return {
        props: {
            
        }
    }
}

export default NewServiceOrder