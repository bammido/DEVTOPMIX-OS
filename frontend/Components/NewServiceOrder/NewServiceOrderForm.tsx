import React, { useEffect, useState } from "react";

type Cliente = {
    id: string,
    nome: string
}

const NewServiceOrderForm = ({texto, onChange, handleOnchangeSelect, handleOnSubmit, colaborador, clientes})=>{
    

    const clientesMap: any = clientes?.length && 
    clientes
    .map( (cliente: Cliente) => <option key={cliente.id} value={cliente.nome}>{cliente.nome}</option> )


    return <div className="Centralizer">

        <form className="Form" onSubmit={handleOnSubmit}>


            <div style={{marginBottom: "35px"}}>
                <label>colaborador:</label>
                <input type="text" className="Input" value={`${colaborador.email} (${colaborador.nome})`} disabled/>
            </div>
            
            <label className="Label" htmlFor="texto">descrição:</label>
            <textarea name='texto' value={texto} onChange={onChange} className="TextArea" style={{marginBottom: "35px"}} id="texto"/>

            <div>
                <label className="Label" htmlFor="clientes">cliente:</label>
                <select className="Select" onChange={handleOnchangeSelect}  id="clientes">
                    {clientes?.length && clientesMap}
                </select>
            </div>

            <button className="Submit">enviar</button>

        </form>
    </div>
}

export default NewServiceOrderForm