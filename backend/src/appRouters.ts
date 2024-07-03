import express from 'express';
import avaliadoresRoutes from './routes/avaliadores';

const appRouter = express();

appRouter.use('/avaliadores', avaliadoresRoutes);

export default appRouter;
