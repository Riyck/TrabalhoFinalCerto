import express from 'express';
import avaliadoresRoutes from './routes/avaliadoresRoutes';

const appRouter = express();

appRouter.use('/avaliadores', avaliadoresRoutes);

export default appRouter;
