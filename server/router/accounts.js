import send from 'koa-send';


export async function getAccounts(ctx, next) {
  await send(ctx, 'data/accounts.js');
  await next();
}
