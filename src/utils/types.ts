import { NextFunction, Request, Response, Router } from 'express';


export type RouteHandler<T = void> = (req?: Request, res?: Response, next?: NextFunction) => T;
 