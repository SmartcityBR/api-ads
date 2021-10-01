import 'reflect-metadata';

import express from 'express';

import './database/connect';

import routes from './routes';

import GlobalMiddlewares from './app/middlewares/Global';
const globalMiddlewares = new GlobalMiddlewares();

const app = express();

app.use(express.json());
app.use(routes);
app.use(globalMiddlewares.notFound);
app.use(globalMiddlewares.catchAll);

const port: Number = 3000 || Number(process.env.PORT);

app.listen(port, () => console.log(`Server is running at port ${port}`));