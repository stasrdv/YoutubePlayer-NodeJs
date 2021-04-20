import { RouteHandler } from '../utils/types';

export const wrapAsyncAndSend = (fn: RouteHandler<Promise<any>>): RouteHandler => {
  const handler: RouteHandler = (req, res, next) => {
    if (!res) throw new Error('Error??');
    fn(req, res, next)
      .then(result => res.send(result))
      .catch(next);
  };

  return handler;
}




