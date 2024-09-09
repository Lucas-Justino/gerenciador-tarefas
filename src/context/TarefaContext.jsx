import { createContext, useState } from "react";

export const TarefaContext = createContext();

export const TarefaContextProvider = ({children}) =>{
    const [pendente, setPendente] = useState([{titulo: 'Distribuir as Tarefas', projeto: 'Meu Projeto 1', data: '2019-10-02'}]);
    const [andamento, setAndamento] = useState([{titulo: 'Distribuir as Tarefas 2', projeto: 'Meu Projeto 2', data: '2019-10-02'}]);
    const [concluido, setConcluido] = useState([{titulo: 'Distribuir as Tarefas 3', projeto: 'Meu Projeto 3', data: '2019-10-02'}]);

    return(
        <TarefaContext.Provider value={{
            pendente,
            setPendente,
            andamento,
            setAndamento,
            concluido,
            setConcluido
        }}>
            {children}
        </TarefaContext.Provider>
    )
}


