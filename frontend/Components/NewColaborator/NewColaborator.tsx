import React from 'react'


const NewColaboratorForm = ({onSubmit, form, handleOnChange, passwordsMatch}) => {

    
    return <div style={{flexDirection: 'column'}} className='Centralizer'>
        <form className='Form' onSubmit={onSubmit}>
            <label htmlFor='nome'>Nome:</label>
            <input id='nome' name='nome' value={form.nome} className='Input' onChange={handleOnChange}/>
            <label htmlFor='email'>email:</label>
            <input id='email' name='email' value={form.email} className='Input' onChange={handleOnChange}/>
            <label htmlFor='senha'>senha:</label>
            <input style={{borderColor: `${passwordsMatch? 'rgb(160, 62, 234)' : 'red'}`}} type={'password'} id='senha' name='senha' value={form.senha} className='Input' onChange={handleOnChange}/>
            <label htmlFor='repeteSenha'>por favor repita a senha:</label>
            <input style={{borderColor: `${passwordsMatch? 'rgb(160, 62, 234)' : 'red'}`}} type={'password'} id='repeteSenha' name='repeteSenha' value={form.repeteSenha} className='Input' onChange={handleOnChange}/>
            <button className='Submit'>criar novo cliente</button>
        </form>
        <div style={{height: '35px'}}>
            {!passwordsMatch && <span>senhas diferentes!</span>}
        </div>
    </div>
}


export default NewColaboratorForm