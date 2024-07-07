// @ts-ignore
'use client';

import React, { FormEvent, useState } from 'react';
import axios from 'axios';

const CadastrarEquipe: React.FC = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/equipes', { nome });
      alert('Equipe cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao cadastrar equipe:', error);
      alert('Erro ao cadastrar equipe');
    }
  };

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
      <form
        className="flex flex-col gap-3 p-12 items-center w-[50%] bg-slate-700 rounded-md border-white border-2 border-spacing-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 items-center justify-center w-[97%]">
          <label htmlFor="nome">Nome da Equipe:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={handleNomeChange}
            required
            className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cadastrar Equipe
        </button>
      </form>
    </div>
  );
};

export default CadastrarEquipe;
