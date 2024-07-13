CREATE TABLE avaliadores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE equipes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    avaliador_id INT NOT NULL,
    equipe_id INT NOT NULL,
    notas JSONB NOT NULL,
    FOREIGN KEY (avaliador_id) REFERENCES avaliadores(id),
    FOREIGN KEY (equipe_id) REFERENCES equipes(id)
);
