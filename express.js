import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

const basePath = '/';
app.use(basePath, express.static('dist/client'));
app.use(ssrHandler);

app.listen(3005, () => {
  console.log('Server started on http://localhost:3005');
});