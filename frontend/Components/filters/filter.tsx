import React from 'react'


const Filter = ({filterType ,options, setterFilterType, setterFilter}) => {


    const optionsMap = options?.length && options.map(option => <option
        key={option.id}
        value={option.id}>
            {option.nome}
            {option?.email && `(${option.email})`}
        </option>)

    return <div className='MainDivFilter'>
        <div className='SubDivFilter'>
            <label htmlFor='filtrar-por'>Filtrar por:</label>
            <select value={filterType} className='SelectFilter' id='filtrar-por' onChange={(e)=>setterFilterType(e.target.value)}>
                <option value="" selected disabled hidden></option>
                <option value={'cliente'}>cliente</option>
                <option value={'colaborador'}>colaborador</option>
            </select>
        </div>

        <div className='SubDivFilter' id='optionsDiv'>
        {
        options?.length ?  
            <select id='select' className='SelectFilter' onChange={(e)=>setterFilter(e.target.value)}>
                {optionsMap}
            </select>
            :<></>
        }
        </div>
        
    </div>
}

export default Filter