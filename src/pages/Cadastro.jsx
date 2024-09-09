import { useContext, useState } from "react";
import { TarefaContext } from "../context/TarefaContext";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [data, setData] = useState("");

  const { adicionarUsuario } = useContext(TarefaContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if(!nome || !sobrenome || !email || !senha || !data){
        alert('Por favor, preencha todos os campos')
        return
    }
    e.preventDefault();
    adicionarUsuario({ nome, sobrenome, email, senha, data });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-md p-4 w-80 shadow-lg">
        <input
          type="text"
          placeholder="Nome"
          className="border p-2 mb-2 w-full"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          className="border p-2 mb-2 w-full"
          required
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border p-2 mb-2 w-full"
          required
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          className="border p-2 mb-2 w-full"
          required
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
