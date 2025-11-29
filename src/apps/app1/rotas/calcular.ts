import {Router} from 'express';
import {calcularComissao} from '../servicos/calculadora.js';

const rota = Router();

rota.post('/', async (req, res) => {
    const itens = req.body.vendas;
    const resultado = await calcularComissao(itens);
    res.json(resultado);
});

export default rota;