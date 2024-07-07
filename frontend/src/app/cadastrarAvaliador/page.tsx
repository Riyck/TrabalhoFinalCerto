'use client';

import React, { FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  nome: string;
  login: string;
  senha: string;
}

// Função para lidar com o envio do formulário
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  const nome = formData.get('nome') as string;
  const login = formData.get('login') as string;
  const senha = formData.get('senha') as string;

  try {
    await axios.post('http://localhost:3001/api/avaliadores', { nome, login, senha });
    alert('Avaliador cadastrado com sucesso!');
    // Redirecionamento ou lógica adicional após o sucesso
  } catch (error) {
    console.error('Erro ao cadastrar avaliador:', error);
    alert('Erro ao cadastrar avaliador');
  }
};

// Componente que renderiza o formulário
const CadastrarAvaliador: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
      <form
        className="flex flex-col gap-3 p-12 items-center w-[50%] bg-slate-700 rounded-md border-white border-2 border-spacing-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 items-center justify-center w-[97%]">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
          />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center w-[97%]">
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            required
            className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
          />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center w-[97%]">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            required
            className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cadastrar Avaliador
        </button>
      </form>
    </div>
  );
};

export default CadastrarAvaliador;
