import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, {useEffect, useState, useContext} from 'react'
import jwt from 'jsonwebtoken'
import NavBar from '../../Components/NavBar/NavBar'
import { api } from '../../services/api'
import useRequestMsg from '../../hooks/useRequestMsg'
import ServiceOrdersList from '../../Components/ServiceOrders/ServiceOrders'
import Filter from '../../Components/filters/filter'
import Sorter from '../../Components/filters/Sort'
import PaginationComponent from '../../Components/filters/Pagination'

const ServiceOrders = () =>{
    const [ordensDeServico, setOrdensDeServico] = useState<any[]>([{}])
    const [colaboradores, setColaboradores] = useState<any[]>([{}])
    const [clientes, setClientes] = useState<any[]>([{}])
    const [ordensDeServicoToShow, setOrdensDeServicoToShow] = useState<any[]>([{}])
    const [OSOnScrenn, setOSOnScreen] = useState([])

    const [isLoadingOS, setIsLoadingOS] = useState<boolean>(true)
    const [isLoadingClientes, setIsLoadingClientes] = useState<boolean>(true)
    const [isLoadingOSOlaboradores, setIsLoadingColaboradores] = useState<boolean>(true)

    const [filterType, setFilterType] = useState('')
    const [filter, setFilter] = useState('')


    const [sort, setSort] = useState('')
    const [sortType, setSortType] = useState('')

    const [ordensPerPage, setOrdensPerPage] = useState(10)
    const [pages, setPages] = useState(0)
    const [actualPage, setActualPage] = useState(1)

    const {msg, setMsg} = useRequestMsg()


     useEffect(()=>{
         DoRequests()
    },[])

    useEffect(()=>{
        definePages()
    },[ordensDeServicoToShow])

    useEffect(()=>{
        definePages()
        defineOSOnScreen()
    },[actualPage, ordensDeServicoToShow, ordensPerPage])

    useEffect(()=>{
        !isLoadingOS && !isLoadingClientes && !isLoadingOSOlaboradores && setOrdensDeServicoToShow(defineOSToShow())
    },[isLoadingOS , isLoadingClientes , isLoadingOSOlaboradores])

    useEffect(()=>{
        const Filter = defineOSToShow().filter( ordem => filterType==='colaborador'? ordem.colaborador.id === filter :
            ordem.cliente.id === filter
        )
        setOrdensDeServicoToShow(Filter)
    },[filter])

    useEffect(()=>{
        (sortType==='cliente' || sortType==='colaborador') && sortByName()
        sortType==='data' && sortByDate()
    },[sort, sortType])


    const defineOSToShow = () => {

        const map = ordensDeServico.map((ordem) => {
            return {...ordem, 
                colaborador: colaboradores.find( ({id})=> id === ordem.colaborador),
                cliente: clientes.find( ({id})=> id === ordem.cliente)
            }
        })

        return map
    }

    const definePages = ()=>{
        const totalPages = Math.ceil(ordensDeServicoToShow.length/ordensPerPage)
        setPages(totalPages)
    }

    const defineOSOnScreen = () => {
        const Filter = ordensDeServicoToShow.filter((order, i)=>{
            return i<ordensPerPage*actualPage && i>=ordensPerPage*(actualPage-1)
          })

          setOSOnScreen(Filter)
    }

    const clearFilters = () => {
        setOrdensDeServicoToShow(defineOSToShow)
        setFilterType('')
        setSortType('')
    }


    const sortByName = ()=>{

        const Sort = OSOnScrenn.sort((a,b)=>{
            
            const A = a[sortType].nome.toUpperCase()
            const B = b[sortType].nome.toUpperCase()

            const returnValue = sort==='desc'? -1 : 1 


            if (A<B) return -1* returnValue
            if (A>B) return 1 *returnValue
            return 0;})

        setOSOnScreen(Sort)

    }

    const sortByDate = ()=>{

        const Sort = OSOnScrenn.sort((a,b)=>{
            const A = new Date(a.createdAt).getTime()
            const B = new Date(b.createdAt).getTime()
            
            const returnValue = sort==='desc'? -1 : 1 

            const dif = A -B
            return dif * returnValue
        })

        setOSOnScreen(Sort)

    }

    console.log('type', sortType)

    const DoRequests = () => {
    
        setIsLoadingOS(true)
        setIsLoadingClientes(true)
        setIsLoadingColaboradores(true)

        api.get('ordens-de-servico')
        .then(data => {
            setOrdensDeServico(data.data.ordensDeServico)
            setIsLoadingOS(false)
        })
        .catch(error => {
            setMsg({msg: `${error.response.data.message}`, color: 'red'})
            setIsLoadingOS(false)
        })

        api.get(`colaboradores/`)
        .then(data => {
            console.log(data)
            setColaboradores(data.data.colaboradores)
        setIsLoadingColaboradores(false)
        })
        .catch(error => {
            console.log(error)
            setMsg({msg: `${error.response?.data?.message}`, color: 'red'})
        setIsLoadingColaboradores(false)
        })

        api.get(`clientes/`)
        .then(data => {
            setClientes(data.data.clientes)
        setIsLoadingClientes(false)
        })
        .catch(error => {
            setMsg({msg: `${error.response?.data?.message}`, color: 'red'})
        setIsLoadingClientes(false)
        })
    }

    return <div className='MainDivOs'>
        <NavBar />

        <div className='Panel'>

            <h1 className='Title'>Ordens de serviço:</h1>
            
            <div className='Filter-Sorter' >
                <Filter 
                options={filterType==='colaborador'? colaboradores : filterType==='cliente'? clientes : []} 
                setterFilter={setFilter} 
                setterFilterType={setFilterType}
                filterType={filterType}
                />

                <Sorter 
                setterSortType={setSortType}
                SetterSort={setSort}
                sortType={sortType}
                sort={sort}
                />

                <select onChange={(e)=>setOrdensPerPage(+e.target.value)}>
                    <option value='5'>5</option>
                    <option selected value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>

                <button className='ClearButton' onClick={clearFilters}>Limpar</button>
            </div>

            <div className='OSMainDiv'>
            <span>{msg.msg}</span>
            {!isLoadingOS && !isLoadingClientes && !isLoadingOSOlaboradores && <ServiceOrdersList list={OSOnScrenn} />}

            </div>
        </div>
       { !isLoadingOS && !isLoadingClientes && !isLoadingOSOlaboradores && <div className='PaginatioDiv'>
            <PaginationComponent paginas={pages} setPaginaAtual={setActualPage} paginaAtual={actualPage} />
        </div>}
    </div>

}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
    
    const {"Colaborador-token": token} =  parseCookies(ctx)
    
    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    
    const {userEmail}: any = jwt && jwt.decode(token)
    
    if(userEmail!== 'admin@admin.com') {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    
    return {
        props: {
            
        }
    }
}

export default ServiceOrders