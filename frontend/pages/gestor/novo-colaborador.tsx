import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, {useState, useEffect} from 'react'
import NewColaboratorForm from '../../Components/NewColaborator/NewColaborator'
import useForm from '../../hooks/UseForm'
import jwt from 'jsonwebtoken'
import NavBar from '../../Components/NavBar/NavBar'
import { api } from '../../services/api'
import useRequestMsg from '../../hooks/useRequestMsg'

const NewColaborator = () => {


    const [passwordsMatch, setPasswordsMatch] = useState<boolean>()

    const [form, handleOnChange] = useForm({
        email: '',
        senha: '',
        repeteSenha: '',
        nome: ''
    })

    const {msg, setMsg} = useRequestMsg()

    
    const {senha, repeteSenha, nome, email} = form

    useEffect(()=>{
        setPasswordsMatch(senha === repeteSenha)
    },[senha, repeteSenha])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        api.post('clientes', {
            nome,
            email,
            senha
        })
        .then(data => setMsg({msg: 'cliente criado com sucesso!', color: 'green'}) )
        .catch(error => setMsg({msg: error.response?.data?.message, color: 'red'}))
    }

    return<div className='Centralizer' style={{flexDirection: "column"}}>
        <NavBar />
        <h1 className='Title'>Dados do novo colaborador:</h1>
        <span>{msg.msg}</span>
        <NewColaboratorForm passwordsMatch={passwordsMatch} form={form} handleOnChange={handleOnChange} onSubmit={handleOnSubmit}/>
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

export default NewColaborator
