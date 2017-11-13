import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';

import apiRouter from './router';


const ENV = process.env.NODE_ENV || 'dev';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;

const app = new Koa();

app
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(apiRouter.routes());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
