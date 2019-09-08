import express from 'express';
import knex from 'knex';
import { Model } from 'objection';
import path from 'path';

import { database } from 'config';
import api from '../api';

Model.knex(knex(database));

const app = express();
const port = process.env.PORT || 8080;
const staticPath = path.join('..', 'frontend/dist');

app.use(express.static(staticPath));
app.use('/api/v1', api);

app.get('*', (req, res) => {
  res.sendFile('/frontend/dist/index.html', {
    root: '..'
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export default app;
