import express from 'express';

import { searchRouter } from './routes';

const api = express();

api.use('/search', searchRouter);

export default api;
