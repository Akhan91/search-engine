import express from 'express';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { type Service } from './types.js';
import { createSearchRouter } from './routes/search.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const services = JSON.parse(readFileSync(join(__dirname, '../data.json'), 'utf-8')) as Service[];

const app = express();
app.use('/search', createSearchRouter(services));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
