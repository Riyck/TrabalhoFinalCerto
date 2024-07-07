import { Router, Request, Response } from 'express';
import pool from '../database/dbConfig';

const avaliacoesRouter = Router();

avaliacoesRouter.post('/', async (req: Request, res: Response) => {
  const { id_avaliador, id_equipe } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO avaliacoes (id_avaliador, id_equipe) VALUES ($1, $2) RETURNING *',
      [id_avaliador, id_equipe]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar a avaliação');
  }
});

avaliacoesRouter.get('/', async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * FROM avaliacoes');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar as avaliações');
    }
  });
  
  avaliacoesRouter.get('/equipe/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('SELECT * FROM avaliacoes WHERE id_equipe = $1', [id]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar as avaliações da equipe');
    }
  });

  avaliacoesRouter.get('/avaliador/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('SELECT * FROM avaliacoes WHERE id_avaliador = $1', [id]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar as avaliações do avaliador');
    }
  });

  avaliacoesRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nota1, nota2, nota3, nota4, nota5 } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE avaliacoes SET nota1 = $1, nota2 = $2, nota3 = $3, nota4 = $4, nota5 = $5 WHERE id = $6 RETURNING *',
        [nota1, nota2, nota3, nota4, nota5, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar a avaliação');
    }
  });

export default avaliacoesRouter;
