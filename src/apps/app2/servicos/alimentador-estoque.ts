import type { Produto } from "../types/produtos.js";
import type { MovimentacaoEstoque } from "../types/produtos.js";

export function adicionaAoEstoque(produtos: Produto[]): MovimentacaoEstoque[] {
    let identificador = 0; 
    const movimentacao = produtos.map(produto => {
        let tipoMov: 'entrada' | 'saida';
        if (produto.estoque == 0) {
            console.log("Valor inserido zero, impossivel prosseguir com a movimentação.");
            return undefined;
        }
        else if (produto.estoque > 0) {
            tipoMov = 'entrada';
        }
        else if(produto.estoque < 0){
            tipoMov = 'saida';
        }
        let quantidade = produto.estoque;
        identificador++;     
        return{
            identificador: identificador,
            quantidade: quantidade,
            tipoMovimentacao: tipoMov
        }
    }).filter(mov => mov !== undefined);
    return movimentacao;
}