import type {Item} from '../types/item.js';
import type {ItemComissao} from '../types/item.js';
export function calcularComissao(itens: Item[]):ItemComissao[]{
    const itensComissao = itens.map(item => {
        let comissao = 0;
        if (item.valor >= 500) {
            comissao = item.valor * 0.1;
        }
        else if (item.valor < 500 && item.valor >= 100){
            comissao = item.valor * 0.05;
        }
        return {
            vendedor: item.vendedor,
            comissao: comissao
        }
    });
    const vendedoresComissao: {[nome: string]: ItemComissao} = {};
    for (const item of itensComissao) {
        const nomeVendedor = item.vendedor;
        if (!vendedoresComissao[nomeVendedor]) {
            vendedoresComissao[nomeVendedor] = {
                vendedor: nomeVendedor,
                comissao: 0
            };
        }
        vendedoresComissao[nomeVendedor].comissao = Number((vendedoresComissao[nomeVendedor].comissao + item.comissao).toFixed(2));
    }

    const resultado = Object.values(vendedoresComissao);
    resultado.forEach(item => {
        console.log(`Vendedor: ${item.vendedor}, Comissão Total: R$${item.comissao}`);
    });
    return resultado;
}

