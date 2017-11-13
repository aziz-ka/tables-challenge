import send from 'koa-send';


export async function getHoldings(ctx, next) {
  await send(ctx, 'data/holdings.js');
  await next();
}
