import express from 'express';
import flashCardsRouter from './routes/flashcards.routes';

const app = express();

app.use(express.json());
app.use('/flash-cards', flashCardsRouter);

export default app;