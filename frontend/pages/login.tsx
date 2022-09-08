import React, { useContext } from 'react'
import { AuthContext } from '../Context/SignInCtx'
import SignInForm from '../Components/SignIn/SignIn'
import useForm from '../hooks/UseForm'

type SignIn = {
  senha: string,
  email: string
}

export default function Login() {

  const [form, onChange] = useForm({
    email: '',
    senha: ''
  })

  const {senha, email}:SignIn  = form

  const {signIn, reqErr} = useContext(AuthContext)

  const handleSignIn = (e: Event)=>{
    e.preventDefault()
    signIn({email, senha})
  }


  return (
    <>
      <div style={{display: 'flex', width: '100vw', justifyContent: 'center', color: 'red', marginTop: '15px'}}>
        <span>{reqErr}</span>
      </div>

      <h1 className='Title'>Login</h1>
      <SignInForm handleOnChange={onChange} handleOnSubmit={handleSignIn} email={email} senha={senha} />
  </>
  )
}

