import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TarefaContext } from "../context/TarefaContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { usuario } = useContext(TarefaContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    if(!email || !senha){
        alert('Por favor, preencha todos os campos')
        return
    }
    for (const conta of usuario) {
      if (conta.email === email && conta.senha === senha) {
        navigate("/tarefas");
        return;
      }
    }
    alert("Usuario Não Cadastrado");
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-md p-4 w-80 shadow-lg">
        <input
          type="email"
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
        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            onClick={handleCadastro}
          >
            Novo Cadastro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
