import { FaRegClock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

import Card from "./Card";
import { useState } from "react";
import NovaTarefa from "./NovaTarefa";

const Quadro = ({ icone, nome, lista, setLista }) => {
  const [adicionando, setAdicionando] = useState(false);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const handleAdicionarTarefa = (novaTarefa) => {
    if (tarefaEditando) {
      setLista((prevLista) =>
        prevLista.map((tarefa) =>
          tarefa.titulo === tarefaEditando.titulo ? novaTarefa : tarefa
        )
      );
      setTarefaEditando(null);
    } else {
      setLista((prevLista) => [...prevLista, novaTarefa]);
    }
    setAdicionando(false);
  };

  const handleEditarTarefa = (tarefa) => {
    setTarefaEditando(tarefa);
    setAdicionando(true);
  };

  const handleApagarTarefa = (tarefaApagar) => {
    setLista((prevLista) =>
      prevLista.filter((tarefa) => tarefa.titulo !== tarefaApagar.titulo)
    );
  };

  return (
    <div className="relative flex flex-col m-10 gap-4 mb-2">
      <div className="flex items-center justify-between w-96">
        <div className="flex gap-2 justify-center items-center">
          {icone === "andamento" ? (
            <FaRegClock color="#5EBCEA" size={20} />
          ) : (
            <MdOutlineDone color="#00C04A" size={30} />
          )}
          <span className="font-semibold text-xl">{nome}</span>
        </div>
        <button
          className="border border-[#BDC5CC] rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => setAdicionando(true)}
        >
          <FaPlus color="#BDC5CC" />
        </button>
      </div>

      {adicionando && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <NovaTarefa
              onSubmit={handleAdicionarTarefa}
              tarefaEditando={tarefaEditando}
            />
          </div>
        </>
      )}

      {lista &&
        lista.map((tarefa, index) => (
          <Card
            key={index}
            titulo={tarefa.titulo}
            projeto={tarefa.projeto}
            data={tarefa.data}
            nomeLista={nome}
            editar={() => handleEditarTarefa(tarefa)}
            apagar={() => handleApagarTarefa(tarefa)}
          />
        ))}
    </div>
  );
};

export default Quadro;
