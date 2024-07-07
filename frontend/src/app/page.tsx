import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Gerenciamento de Avaliações</h1>
      <ul>
        <li>
          <Link href="/cadastrarAvaliador">Cadastrar Avaliador</Link>
        </li>
        <li>
          <Link href="/cadastrarEquipe">Cadastrar Equipe</Link>
        </li>
        <li>
          <Link href="/avaliarEquipe">Atribuir Notas às Equipes</Link>
        </li>
      </ul>
    </div>
  );
}
