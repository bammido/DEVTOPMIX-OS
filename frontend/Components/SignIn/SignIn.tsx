import React from "react";

const SignInForm = ({handleOnChange, handleOnSubmit, email, senha}) =>{

    return <div className="Centralizer LoginDiv">
        <form className="Form" onSubmit={handleOnSubmit}>
            <input className="Input" type={'email'} value={email} onChange={handleOnChange} name='email' placeholder="Email"/>
            <input className="Input" type={'password'} value={senha} onChange={handleOnChange} name='senha' placeholder="Senha"/>
            <button className="Submit">enviar</button>
        </form >
    </div>
}

export default SignInForm