import { createContext, useEffect, useState } from "react";

export const TarefaContext = createContext();

export const TarefaContextProvider = ({children}) =>{
    const [pendente, setPendente] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [concluido, setConcluido] = useState([]);
    const [usuario, setUsuario] = useState([])

    const moverProximo = (tarefa, listaDestino) => {
        if(listaDestino === 'andamento'){
            setPendente((prevLista) => prevLista.filter((t) => t.titulo !== tarefa.titulo));
            setAndamento((prevLista) => [...prevLista, tarefa]);
        }
        else if(listaDestino === 'concluido'){
            setAndamento((prevLista) => prevLista.filter((t) => t.titulo !== tarefa.titulo));
            setConcluido((prevLista) => [...prevLista, tarefa]);
        }
    }

    const adicionarUsuario = (novoUsuario) => {
        setUsuario((prevLista) => [...prevLista, novoUsuario])
    }

    return(
        <TarefaContext.Provider value={{
            pendente,
            setPendente,
            andamento,
            setAndamento,
            concluido,
            setConcluido,
            moverProximo,
            usuario,
            setUsuario,
            adicionarUsuario
        }}>
            {children}
        </TarefaContext.Provider>
    )
}


