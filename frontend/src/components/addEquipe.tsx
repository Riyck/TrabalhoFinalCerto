'use client';
import { useState } from 'react';
import api from '../services/api';

const AddEquipe = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.post('/equipes', { nome });
      alert('Equipe cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar equipe:', error);
      alert('Erro ao cadastrar equipe');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome da Equipe:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <button type="submit">Cadastrar Equipe</button>
    </form>
  );
};

export default AddEquipe;
