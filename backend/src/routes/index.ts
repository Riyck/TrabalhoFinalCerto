import express from "express";
import userRoutes from "./userRoutes";
import addressRoutes from "./addressRoutes";
import avaliadoresRouter from "./avaliadoresRoutes";
import equipesRouter from "./equipesRouter";
import avaliacoesRouter from "./avaliacoesRouter";

const appRouter = express();

appRouter.use("/users", userRoutes);
appRouter.use("/address", addressRoutes);
appRouter.use("/avaliadores", avaliadoresRouter);
appRouter.use("/equipes", equipesRouter);
appRouter.use("/avaliacoes", avaliacoesRouter);


export default appRouter;
