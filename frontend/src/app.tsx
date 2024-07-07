import React from 'react';
import './styles/App.css';
import AddAvaliador from './components/addAvaliador';
import AddEquipe from './components/addEquipe';
import AvaliarEquipe from './components/avaliarEquipe';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Gerenciamento de Avaliações</h1>
      <h2>Cadastrar Avaliador</h2>
      <AddAvaliador />
      <h2>Cadastrar Equipe</h2>
      <AddEquipe />
      <h2>Atribuir Notas às Equipes</h2>
      <AvaliarEquipe />
    </div>
  );
};

export default App;
