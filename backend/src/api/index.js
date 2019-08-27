import express from 'express';

import { searchRouter, productRouter } from './routes';

const api = express();

api.use('/search', searchRouter);
api.use('/product', productRouter);

export default api;
