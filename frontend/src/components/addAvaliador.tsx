'use client';
import { useState } from 'react';
import api from '../services/api';

const AddAvaliador = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.post('/avaliadores', { nome, login, senha });
      alert('Avaliador cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar avaliador:', error);
      alert('Erro ao cadastrar avaliador');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Login:</label>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      </div>
      <button type="submit">Cadastrar Avaliador</button>
    </form>
  );
};

export default AddAvaliador;
