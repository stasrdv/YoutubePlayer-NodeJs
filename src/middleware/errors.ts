import { NextFunction, Request, Response } from 'express';

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error(err.stack);
  next(err);
}

export function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (!req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}


export function errorHandler (err:Error, req:Request, res:Response, next:NextFunction) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}