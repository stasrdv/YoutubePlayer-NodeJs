import { NextFunction, Request, Response } from 'express';
import { log } from '../utils/logger';

export function requestLog(req: Request, res: Response, next: NextFunction): void {
  const url = req.url;
  log(`[REQ RECEIVED] ${url}`);

  res.on('finish', () => log(`[REQ ENDED] ${url}`));
  // res.on('close', () => log(`[REQ ENDED] ${url}`));

  next();
}
