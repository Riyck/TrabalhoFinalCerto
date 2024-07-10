// @ts-ignore
'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';

const AvaliarEquipe: React.FC = () => {
  const [idAvaliador, setIdAvaliador] = useState('');
  const [idEquipe, setIdEquipe] = useState('');
  const [nota1, setNota1] = useState<number | undefined>(undefined);
  const [nota2, setNota2] = useState<number | undefined>(undefined);
  const [nota3, setNota3] = useState<number | undefined>(undefined);
  const [nota4, setNota4] = useState<number | undefined>(undefined);
  const [nota5, setNota5] = useState<number | undefined>(undefined);
  const [avaliadores, setAvaliadores] = useState<{ id: string; nome: string }[]>([]);
  const [equipes, setEquipes] = useState<{ id: string; nome: string }[]>([]);
  const [avaliadorFocus, setAvaliadorFocus] = useState(false);

  useEffect(() => {
    
    const fetchAvaliadores = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/avaliadores');
        setAvaliadores(response.data);
      } catch (error) {
        console.error('Erro ao buscar avaliadores:', error);
        alert('Erro ao buscar avaliadores');
      }
    };

    
    const fetchEquipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/equipes');
        setEquipes(response.data);
      } catch (error) {
        console.error('Erro ao buscar equipes:', error);
        alert('Erro ao buscar equipes');
      }
    };

    fetchAvaliadores();
    fetchEquipes();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:3001/api/avaliacoes/${idAvaliador}`, {
        id_avaliador: idAvaliador,
        id_equipe: idEquipe,
        nota1,
        nota2,
        nota3,
        nota4,
        nota5,
      });
      alert('Notas atribuídas com sucesso!');
      setIdAvaliador('');
      setIdEquipe('');
      setNota1(undefined);
      setNota2(undefined);
      setNota3(undefined);
      setNota4(undefined);
      setNota5(undefined);
    } catch (error) {
      console.error('Erro ao atribuir notas:', error);
      alert('Erro ao atribuir notas');
    }
  };

  const handleAvaliadorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIdAvaliador(event.target.value);
  };

  const handleEquipeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIdEquipe(event.target.value);
  };

  const handleNotaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const name = event.target.name;

    switch (name) {
      case 'nota1':
        setNota1(value);
        break;
      case 'nota2':
        setNota2(value);
        break;
      case 'nota3':
        setNota3(value);
        break;
      case 'nota4':
        setNota4(value);
        break;
      case 'nota5':
        setNota5(value);
        break;
      default:
        break;
    }
  };

  const handleAvaliadorFocus = () => {
    setAvaliadorFocus(true);
  };

  const handleAvaliadorBlur = () => {
    setAvaliadorFocus(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Avaliar Equipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="id_avaliador" className="font-semibold mb-1 text-blue-600">
            Avaliador:
          </label>
          <select
            id="id_avaliador"
            name="id_avaliador"
            value={idAvaliador}
            onChange={handleAvaliadorChange}
            onFocus={handleAvaliadorFocus}
            onBlur={handleAvaliadorBlur}
            className={`border rounded-md px-3 py-2 w-full focus:outline-none text-black ${
              avaliadorFocus ? 'border-blue-500' : 'border-gray-300'
            }`}
            required
          >
            <option value="">Selecione um avaliador</option>
            {avaliadores.map(avaliador => (
              <option key={avaliador.id} value={avaliador.id}>
                {avaliador.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="id_equipe" className="font-semibold mb-1 text-green-600">
            Equipe:
          </label>
          <select
            id="id_equipe"
            name="id_equipe"
            value={idEquipe}
            onChange={handleEquipeChange}
            style={{ color: '#000000', borderColor: '#00FF00' }}
            className="border border-green-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-green-500"
            required
          >
            <option value="">Selecione uma equipe</option>
            {equipes.map(equipe => (
              <option key={equipe.id} value={equipe.id}>
                {equipe.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="nota1" className="font-semibold mb-1 text-purple-600">
              Originalidade do Projeto:
            </label>
            <input
              type="number"
              id="nota1"
              name="nota1"
              value={nota1 === undefined ? '' : nota1}
              onChange={handleNotaChange}
              className="text-black border border-purple-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nota2" className="font-semibold mb-1 text-yellow-600">
              Impacto Potencial:
            </label>
            <input
              type="number"
              id="nota2"
              name="nota2"
              value={nota2 === undefined ? '' : nota2}
              onChange={handleNotaChange}
              className="text-black border border-yellow-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nota3" className="font-semibold mb-1 text-red-600">
              Execução Técnica:
            </label>
            <input
              type="number"
              id="nota3"
              name="nota3"
              value={nota3 === undefined ? '' : nota3}
              onChange={handleNotaChange}
              className="text-black border border-red-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nota4" className="font-semibold mb-1 text-indigo-600">
              Apresenação e Demonstração:
            </label>
            <input
              type="number"
              id="nota4"
              name="nota4"
              value={nota4 === undefined ? '' : nota4}
              onChange={handleNotaChange}
              className="text-black border border-indigo-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nota5" className="font-semibold mb-1 text-gray-600">
              Viabilidade e Sustentabilidade:
            </label>
            <input
              type="number"
              id="nota5"
              name="nota5"
              value={nota5 === undefined ? '' : nota5}
              onChange={handleNotaChange}
              className="text-black border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-gray-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Atribuir Notas
        </button>
      </form>
    </div>
  );
};

export default AvaliarEquipe;
