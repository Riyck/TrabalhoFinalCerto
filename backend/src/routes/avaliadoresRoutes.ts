import { Router, Request, Response } from 'express';
import pool from '../database/dbConfig';

const avaliadoresRouter = Router();

avaliadoresRouter.post('/', async (req: Request, res: Response) => {
  const { nome, login, senha } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, login, senha]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar o avaliador');
  }
});

avaliadoresRouter.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM avaliadores');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar os avaliadores');
  }
});

avaliadoresRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM avaliadores WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      res.status(404).send('Avaliador não encontrado');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar o avaliador');
  }
});


avaliadoresRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM avaliadores WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).send('Avaliador não encontrado');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao excluir o avaliador');
  }
});

export default avaliadoresRouter;
