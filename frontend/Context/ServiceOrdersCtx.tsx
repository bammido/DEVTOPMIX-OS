import react, { createContext, useEffect, useState } from  'react'
import useRequestMsg from '../hooks/useRequestMsg'
import { api } from '../services/api'

export const ServiceOrderContext = createContext({} as ServiceOrderContextType)

type ServiceOrderContextType = {
    ordensDeServico: [],
    colaboradores: [],
    clientes: [],
    msg: string,
    isLoading: boolean
}

// const ServiceOrderProvider = ({children}) => {
    




//     useEffect(()=>{
//     },[])

   


//     return <ServiceOrderContext.Provider >
//         {/* {children} */}
//     </ServiceOrderContext.Provider>
// }

// export default ServiceOrderProvider