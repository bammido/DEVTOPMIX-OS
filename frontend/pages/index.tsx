import React from 'react'
import Router from '../node_modules/next/router'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
      <div className='MainDivHome'>
      <h1 className="text-3xl font-bold underline">
          DEVTOPMIX  Sistema de Ordens de Serviço
      </h1>
      <div className='DivNav'>
        <nav style={{marginTop: "35px"}} className='Nav'>
          <button onClick={()=>Router.push('/colaborador/nova-ordem-de-servico')}  className='NavButton HomeButton'>Área Colaborador</button>
          <button onClick={()=>Router.push('/gestor/ordens-de-servico')}  className='NavButton HomeButton'>Área Gestor</button>
        </nav>
      </div>
      </div>

  )
}
