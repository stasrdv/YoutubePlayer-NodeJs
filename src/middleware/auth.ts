import { NextFunction, Request, Response } from 'express';

export function authBailOut(req: Request, res: Response, next: NextFunction): void {
  if (!req.headers['x-auth']) return next('router');
  next();
}
