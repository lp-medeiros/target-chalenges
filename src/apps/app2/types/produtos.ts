export interface Produto {
    codigoProduto: number;
    descricaoProduto: string;
    estoque :number;
}

export type MovimentacaoEstoque = {
    identificador: number;
    quantidade: number;
    tipoMovimentacao: 'entrada' | 'saida';
};