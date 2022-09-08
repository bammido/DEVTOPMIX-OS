import React,{useEffect, useState} from 'react'
import useRequestMsg from '../../hooks/useRequestMsg'
import { api } from '../../services/api'



const ServiceOrder = ({ordem}) => {
    const data = ordem.createdAt?.split('T')[0]

    const {cliente, colaborador} = ordem
    
    return <>
        { <>
            <div className='OSDivInfos'>
                <div className='OSInfos'><span className='OSInfosSpan'>{data}</span></div>   
                <div className='OSInfos'><span className='OSInfosSpan'>{cliente?.nome}</span></div>  
                <div className='OSInfos'><span className='OSInfosSpan'>{colaborador?.nome} ({colaborador?.email})</span></div>
                <div className='OSInfos'><span className='OSInfosSpan'>{ordem.texto}</span></div>
            </div>
        </>}
    </>
}
export default ServiceOrder