import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Gerenciamento de Avaliações</h1>

      <ul style={buttonListStyle}>
        <li style={listItemStyle}>
          <Link href="/cadastrarAvaliador" passHref legacyBehavior>
            <button style={buttonStyle}>Cadastrar Avaliador</button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/cadastrarEquipe" passHref legacyBehavior>
            <button style={buttonStyle}>Cadastrar Equipe</button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/avaliarEquipe" passHref legacyBehavior>
            <button style={buttonStyle}>Atribuir Notas às Equipes</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  backgroundImage: 'url("/path/to/your/image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#004d40',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
};

const columnsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '20px 0',
};

const columnStyle: React.CSSProperties = {
  flex: 1,
  padding: '0 20px',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
};

const buttonListStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  textAlign: 'center',
};

const listItemStyle: React.CSSProperties = {
  margin: '10px 0',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#004d40',
  color: '#ffffff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  textAlign: 'center',
  textDecoration: 'none',
};

const buttonHoverStyle: React.CSSProperties = {
  backgroundColor: '#00796b',
};

function Button({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(hover ? buttonHoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}
