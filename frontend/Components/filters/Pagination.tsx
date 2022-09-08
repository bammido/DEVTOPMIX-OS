import React from "react";


/*Componente de paginação precisa receber props de total de paginas (paginas), a função
para setar a página atual (setPaginaAtual) e a página atual (paginaAtual)*/ 

const PaginationComponent = (props)=>{
    const paginas = props.paginas
    
    //função que define a paginação (setada com 2 "vizinhos")
    const usePagination = (vizinhos)=>{
        const arrayDePaginas = []
        let i=1
        if(paginas<=9){
           for(i;i<=paginas;i++){
               arrayDePaginas.push(i)
           } 
        }else{
            const mostraPontosEsquerdo = vizinhos + 2 < props.paginaAtual - 2
            const mostraPontosDireito = vizinhos + 2 < (paginas - 1) - props.paginaAtual
            


            const arrayVizinhosEsquerdo = Array.from(Array(vizinhos), (_, index)=> (index + 1)*-1)
            const arrayVizinhosDireito = Array.from(Array(vizinhos), (_, index)=> index + 1)
            const arrayPaginasCentro = Array.from([...arrayVizinhosEsquerdo,0,...arrayVizinhosDireito], (vizinho)=> props.paginaAtual + vizinho)
            .sort((a,b)=> a-b).filter(vizinho=> vizinho - 2 > 0 && vizinho + 1 <= paginas - 1)

            if(mostraPontosDireito && !mostraPontosEsquerdo){
                if(props.paginaAtual - vizinhos === 4){

                    arrayDePaginas.push(1, 2,3, ...arrayPaginasCentro, "...",paginas-1, paginas)

                }else{
                    arrayDePaginas.push(1, 2, ...arrayPaginasCentro, "...",paginas-1, paginas)
                }

            }
            else if(mostraPontosDireito && mostraPontosEsquerdo){
                arrayDePaginas.push(1, 2, "...",...arrayPaginasCentro,"...", paginas-1, paginas)
            }else{
                if((props.paginaAtual + vizinhos) === (paginas - 3)){
                    arrayDePaginas.push(1, 2, "...",...arrayPaginasCentro,paginas-2, paginas-1, paginas)
                }else{
                    arrayDePaginas.push(1, 2, "...",...arrayPaginasCentro, paginas-1, paginas)
                }

            }
        }
        return arrayDePaginas
    }


    //mapeia e retorna botões de paginação
    const arrayDePaginasMap = usePagination(2).map((pagina)=>{
        if(pagina !== "..."){
            if(pagina === props.paginaAtual){
                return <button className="SelectedButton" key={pagina}>{pagina}</button>
            }
            return <button className="UnSelectedButton" key={pagina} onClick={()=>props.setPaginaAtual(pagina)}>{pagina}</button>
    }
        return <span className="Dots" key={pagina}>{pagina}</span>
    })

    return <div className="MainDivPagination">
        
        {props.paginaAtual=== 1 || <button className="ButtonPagination" onClick={()=>props.setPaginaAtual(props.paginaAtual - 1)} >anterior</button>}
        {arrayDePaginasMap}
        {props.paginaAtual=== paginas || <button className="ButtonPagination" onClick={()=>props.setPaginaAtual(props.paginaAtual + 1)} >proximo</button>}
    </div>
}

export default PaginationComponent