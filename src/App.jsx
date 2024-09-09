import React, { useContext } from 'react';
import Quadro from "./components/Quadro";
import { TarefaContext } from './context/TarefaContext';
import { TarefaContextProvider } from './context/TarefaContext';


export default function App() {
  return (
    <TarefaContextProvider>
      <Content />
    </TarefaContextProvider>
  );
}

const Content = () => {
  const { pendente, setPendente, andamento, setAndamento, concluido, setConcluido } = useContext(TarefaContext);

  return (
    <div className="flex gap-4">
      <Quadro icone="andamento" nome={"Pendentes"} lista={pendente} setLista={setPendente} />
      <Quadro icone="andamento" nome={"Em andamento"} lista={andamento} setLista={setAndamento} />
      <Quadro icone="concluido" nome={"Concluídas"} lista={concluido} setLista={setConcluido} />
    </div>
  );
};
