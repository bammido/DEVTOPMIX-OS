import React from 'react'

const NewClientForm = ({onChange, value, handleOnSubmit}) =>{

    return <div className='Centralizer'>
        <form className='Form' onSubmit={handleOnSubmit}>
            <label className='Label' htmlFor='nome' >Nome do novo cliente:</label>
            <input className='Input' value={value} onChange={onChange} id='nome' name='nome' type={'text'}/>
            <button className='Submit'>criar novo cliente</button>
        </form>
    </div>
}

export default NewClientForm