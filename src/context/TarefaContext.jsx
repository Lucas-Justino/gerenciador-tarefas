import { createContext, useState } from "react";

export const TarefaContext = createContext();

export const TarefaContextProvider = ({children}) =>{
    const [pendente, setPendente] = useState([{titulo: 'Distribuir as Tarefas', projeto: 'Meu Projeto 1', data: '2019-10-02'}]);
    const [andamento, setAndamento] = useState([{titulo: 'Distribuir as Tarefas 2', projeto: 'Meu Projeto 2', data: '2019-10-02'}]);
    const [concluido, setConcluido] = useState([{titulo: 'Distribuir as Tarefas 3', projeto: 'Meu Projeto 3', data: '2019-10-02'}]);

    const moverProximo = (tarefa, listaDestino) => {
        if(listaDestino === 'andamento'){
            console.log('Clicou')
            setPendente((prevLista) => prevLista.filter((t) => t.titulo !== tarefa.titulo));
            setAndamento((prevLista) => [...prevLista, tarefa]);
        }
        else if(listaDestino === 'concluido'){
            setAndamento((prevLista) => prevLista.filter((t) => t.titulo !== tarefa.titulo));
            setConcluido((prevLista) => [...prevLista, tarefa]);
        }
    }

    return(
        <TarefaContext.Provider value={{
            pendente,
            setPendente,
            andamento,
            setAndamento,
            concluido,
            setConcluido,
            moverProximo
        }}>
            {children}
        </TarefaContext.Provider>
    )
}


