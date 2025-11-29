import { Router } from 'express';
import { calcularJuros } from '../servicos/calculador-de-juros.js';

const rotas = Router();

rotas.post('/', (req, res) => {
    const { valor, dataInicio } = req.body;

    if (!valor || !dataInicio) {
        return res.status(400).json({ erro: 'Campos valor e data de inicio são obrigatórios.' });
    }
    const resultado = calcularJuros(valor, dataInicio);
    res.json(resultado);
});

export default rotas;