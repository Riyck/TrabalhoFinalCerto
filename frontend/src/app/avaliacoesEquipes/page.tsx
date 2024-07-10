// @ts-ignore
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvaliacoesEquipe: React.FC = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/avaliacoes');
        setAvaliacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
        alert('Erro ao buscar avaliações');
      }
    };

    fetchAvaliacoes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-black shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Avaliações de Equipes</h2>
      <ul>
        {avaliacoes.map((avaliacao: any) => (
          <li key={avaliacao.id} className="mb-4">
            <p><strong>Avaliador:</strong> {avaliacao.nome_avaliador}</p>
            <p><strong>Equipe:</strong> {avaliacao.nomeEquipe}</p>
            <p><strong>Notas:</strong> {avaliacao.nota1}, {avaliacao.nota2}, {avaliacao.nota3}, {avaliacao.nota4}, {avaliacao.nota5}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvaliacoesEquipe;
