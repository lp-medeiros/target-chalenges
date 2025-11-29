import {Router} from 'express';
import { adicionaAoEstoque } from '../servicos/alimentador-estoque.js';

const rota = Router();

rota.post('/', async (req, res) => {
    const produtos = req.body.estoque;
    const resultado =  adicionaAoEstoque(produtos);
    res.json(resultado);
});

export default rota;