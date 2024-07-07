'use client';
import { useState, useEffect } from 'react';
import api from '../services/api';

const AvaliarEquipe = () => {
  const [avaliadores, setAvaliadores] = useState([]);
  const [equipes, setEquipes] = useState([]);
  const [avaliadorId, setAvaliadorId] = useState('');
  const [equipeId, setEquipeId] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);
  const [nota5, setNota5] = useState(0);

  useEffect(() => {
    const fetchAvaliadores = async () => {
      const response = await api.get('/avaliadores');
      setAvaliadores(response.data);
    };

    const fetchEquipes = async () => {
      const response = await api.get('/equipes');
      setEquipes(response.data);
    };

    fetchAvaliadores();
    fetchEquipes();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`/avaliacoes/${avaliadorId}`, {
        id_avaliador: avaliadorId,
        id_equipe: equipeId,
        nota1,
        nota2,
        nota3,
        nota4,
        nota5,
      });
      alert('Notas atribuídas com sucesso!');
    } catch (error) {
      console.error('Erro ao atribuir notas:', error);
      alert('Erro ao atribuir notas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Avaliador:</label>
        <select value={avaliadorId} onChange={(e) => setAvaliadorId(e.target.value)} required>
          <option value="">Selecione um avaliador</option>
          {avaliadores.map((avaliador: any) => (
            <option key={avaliador.id} value={avaliador.id}>
              {avaliador.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Equipe:</label>
        <select value={equipeId} onChange={(e) => setEquipeId(e.target.value)} required>
          <option value="">Selecione uma equipe</option>
          {equipes.map((equipe: any) => (
            <option key={equipe.id} value={equipe.id}>
              {equipe.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Nota 1:</label>
        <input type="number" value={nota1} onChange={(e) => setNota1(Number(e.target.value))} required />
      </div>
      <div>
        <label>Nota 2:</label>
        <input type="number" value={nota2} onChange={(e) => setNota2(Number(e.target.value))} required />
      </div>
      <div>
        <label>Nota 3:</label>
        <input type="number" value={nota3} onChange={(e) => setNota3(Number(e.target.value))} required />
      </div>
      <div>
        <label>Nota 4:</label>
        <input type="number" value={nota4} onChange={(e) => setNota4(Number(e.target.value))} required />
      </div>
      <div>
        <label>Nota 5:</label>
        <input type="number" value={nota5} onChange={(e) => setNota5(Number(e.target.value))} required />
      </div>
      <button type="submit">Atribuir Notas</button>
    </form>
  );
};

export default AvaliarEquipe;
