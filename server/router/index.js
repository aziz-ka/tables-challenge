import Router from 'koa-router';

import { getAccounts } from './accounts';
import { getHoldings } from './holdings';


const apiRouter = new Router({
  prefix: '/api'
});

apiRouter
  .get('/accounts', getAccounts)
  .get('/holdings', getHoldings);


export default apiRouter;
