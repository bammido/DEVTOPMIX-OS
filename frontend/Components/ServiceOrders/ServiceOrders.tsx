import React from 'react'
import ServiceOrder from './SilngleService'


const ServiceOrdersList = ({list}) => {
    
    const map = list?.length && list.map(ordem =><ServiceOrder key={ordem.id} ordem={ordem}/>)

    return <>

        <div className='Table'>
            <div className='OSDivInfos'>
                <div className='OSInfos'> <span className='OSInfosTittle'>Data:</span> </div>
                <div className='OSInfos'> <span className='OSInfosTittle'>Cliente:</span> </div>
                <div className='OSInfos'> <span className='OSInfosTittle'>Colaborador:</span> </div>
                <div className='OSInfos'> <span className='OSInfosTittle'>Descrção:</span> </div>
            </div>
            {map?.length && map}
        </div>
    </>
}

export default ServiceOrdersList