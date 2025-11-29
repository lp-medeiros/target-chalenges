import { differenceInDays, parseISO } from 'date-fns';


export function calcularJuros(valor: number, dataInicio: string) {
    const dataAtual = new Date();
    const dataInicioDate = parseISO(dataInicio);
    const diasDecorridos = differenceInDays(dataAtual, dataInicioDate);
    const taxaJuros = 2.5;
    const valorFinal = valor * Math.pow((1 + taxaJuros / 100), diasDecorridos);
    return {
        valorInicial: valor,
        dataInicio: dataInicio,
        taxaJuros: taxaJuros,
        valorFinal: Number(valorFinal.toFixed(2)),
        diasDecorridos: diasDecorridos
    };
}
