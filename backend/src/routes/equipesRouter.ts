import { Router, Request, Response } from 'express';
import pool from '../database/dbConfig';

const equipesRouter = Router();

equipesRouter.post('/', async (req: Request, res: Response) => {
  const { nome } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO equipes (nome) VALUES ($1) RETURNING *',
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar a equipe');
  }
});

equipesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM equipes');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as equipes');
  }
});

equipesRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM equipes WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      res.status(404).send('equipe não encontrada');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar a equipe');
  }
});


equipesRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM equipes WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).send('Equipe não encontrada');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao excluir a equipe');
  }
});

export default equipesRouter;
