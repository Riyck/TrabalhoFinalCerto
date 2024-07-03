/*import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const secret = 'seu_segredo_jwt';
const token = jwt.sign({ id: usuario.id, nomeUsuario: usuario.nomeUsuario }, segredo, { expiresIn: '1h' });

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secret, (err: any, user: any) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};*/
