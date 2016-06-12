import fs from 'fs';
import express from 'express';
import yml from 'js-yaml';

const config = yml.load(fs.readFileSync('./config.yml', 'utf-8'));
const app = express();

app.use(express.static('build/hotspot'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
