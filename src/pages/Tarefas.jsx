import React, { useContext } from "react";
import { TarefaContext } from "../context/TarefaContext";
import Quadro from "../components/Quadro";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Tarefas = () => {
  const {
    pendente,
    setPendente,
    andamento,
    setAndamento,
    concluido,
    setConcluido,
    moverProximo,
    usuarioAtivo,
  } = useContext(TarefaContext);

  const navigate = useNavigate();

  const handleSair = () => {
    setPendente([])
    setAndamento([])
    setConcluido([])
    navigate('/')  
  }

  return (
    <div className="flex gap-4">
      <Quadro
        icone="andamento"
        nome={"Pendentes"}
        lista={pendente}
        setLista={setPendente}
        moverProximo={moverProximo}
      />
      <Quadro
        icone="andamento"
        nome={"Em andamento"}
        lista={andamento}
        setLista={setAndamento}
        moverProximo={moverProximo}
      />
      <Quadro
        icone="concluido"
        nome={"Concluídas"}
        lista={concluido}
        setLista={setConcluido}
        moverProximo={moverProximo}
      />
      <div className="flex justify-end items-center w-full h-28 mr-20 gap-8">
        <span>
          Seja bem vindo, <span className="font-bold">{usuarioAtivo}!</span>
        </span>
        <button className="bg-[#7CCCFF] text-white w-16 h-8 rounded-md flex items-center justify-center gap-2 hover:bg-[#5297c2]" onClick={handleSair}>
          <IoMdExit />
          Sair
        </button>
      </div>
      <h1></h1>
    </div>
  );
};

export default Tarefas;
