import React from 'react' 

const Sorter = ({setterSortType, SetterSort, sortType, sort}) =>{
    
    return <div className='MainDivSort'>

        <div className='SubDivSort'>
            <label htmlFor='ordenar-por'>Ordenar por:</label>
            <select className='SelectSort' value={sortType} id='ordenar-por' onChange={(e)=>setterSortType(e.target.value)}>
                <option value="" selected disabled hidden></option>
                <option value='data'>Data</option>
                <option value='colaborador'>Colaborador</option>
                <option value='cliente'>Cliente</option>
            </select>
        </div>

        <div className='SubDivSort'>
            {sortType && <select className='SelectSort' value={sort} onChange={(e)=>SetterSort(e.target.value)}>
                <option value='asc'>ASC</option>
                <option value='desc'>DESC</option>
            </select>}
        </div>
    </div>
}

export default Sorter