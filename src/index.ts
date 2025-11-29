import express from 'express';
import path from 'path';
import app1Routes from './apps/app1/rotas/calcular.js';
import app2Routes from './apps/app2/rotas/alimenta-estoque.js';
import app3Routes from './apps/app3/rotas/calcula-juros.js';

const app = express();

app.use(express.json());

app.use('/api/comissoes', app1Routes);     
app.use('/api/estoque', app2Routes);       
app.use('/api/juros', app3Routes);  

app.get('/api/test-data/comissoes', (req, res) => {
    const testData = require('./test-data/comissoes-teste.json');
    res.json(testData);
});

app.get('/api/test-data/estoque', (req, res) => {
    const testData = require('./test-data/estoque-teste.json');
    res.json(testData);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});