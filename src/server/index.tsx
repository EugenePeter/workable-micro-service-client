import express from 'express';
import applyMiddlewares from './middlewares'
import applySSR from './razzle'

const server = express();
applyMiddlewares(server);
applySSR(server);
export default server;
