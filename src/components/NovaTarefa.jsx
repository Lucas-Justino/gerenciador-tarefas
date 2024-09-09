import { useState, useEffect } from "react";

const NovaTarefa = ({ onSubmit, tarefaEditando }) => {
  const [titulo, setTitulo] = useState("");
  const [projeto, setProjeto] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (tarefaEditando) {
      setTitulo(tarefaEditando.titulo || "");
      setProjeto(tarefaEditando.projeto || "");
      setData(tarefaEditando.data || "");
    }
  }, [tarefaEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, projeto, data });
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 w-80 shadow-lg">
      <input
        type="text"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        placeholder="Título"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        onChange={(e) => setProjeto(e.target.value)}
        value={projeto}
        placeholder="Projeto"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        onChange={(e) => setData(e.target.value)}
        value={data}
        placeholder="Data de Entrega"
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        {tarefaEditando ? "Salvar Alterações" : "Adicionar Tarefa"}
      </button>
    </div>
  );
};

export default NovaTarefa;
