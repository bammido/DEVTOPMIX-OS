import React from 'react'
import Router from '../../node_modules/next/router'

const NavBar = ()=>{
    
    return <div className='MainDivNav'>
       <nav className='Nav'>
            <button onClick={()=>Router.push('/')} className="NavButton">Home</button>
            <button className='NavButton' onClick={()=>Router.push('/gestor/novo-cliente')}>Novo Cliente</button>
            <button className='NavButton' onClick={()=>Router.push('/gestor/novo-colaborador')}>Novo Colaborador</button>
            <button className='NavButton' onClick={()=>Router.push('/gestor/ordens-de-servico')}>Ordens de Servico</button>
       </nav>
    </div>
}

export default NavBar