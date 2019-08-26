import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
const staticPath = path.join('..', 'frontend/dist');

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile('/frontend/dist/index.html', {
    root: '..'
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export default app;
