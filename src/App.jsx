import React from 'react';
import { TarefaContextProvider } from './context/TarefaContext';
import Tarefas from './pages/Tarefas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function App() {
  return (
    <TarefaContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/tarefas' element={<Tarefas />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    </TarefaContextProvider>
  );
}
