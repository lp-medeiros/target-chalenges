const inputValor = document.getElementById('valor');
const inputData = document.getElementById('data');
const btnCalcular = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', async () => {
    try {
        const valorInicial = parseFloat(inputValor.value);
        const dataInicio = inputData.value;

        if( !valorInicial || isNaN(valorInicial) || valorInicial <= 0 ) {
            alert('Por favor, insira um valor inicial válido maior que zero.');
            return;
        }

        if(!dataInicio){
            alert('Por favor, insira uma data de início válida.');
            return;
        }

        const response = await fetch('/api/juros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                valor: valorInicial, 
                dataInicio: dataInicio 
            })
        });
        if(!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        resultado.innerHTML = `
        <div class="resultado-card">
                <h3>Resultado do Cálculo</h3>
                <p><strong>Valor Inicial:</strong> R$ ${data.valorInicial.toFixed(2)}</p>
                <p><strong>Data Início:</strong> ${data.dataInicio}</p>
                <p><strong>Dias Decorridos:</strong> ${data.diasDecorridos} dias</p>
                <p><strong>Taxa de Juros:</strong> ${data.taxaJuros}% ao dia</p>
                <p class="valor-final"><strong>Valor Final:</strong> R$ ${data.valorFinal.toFixed(2)}</p>
            </div>
        `
    } catch (error) {
        alert('Erro: ' + error.message);
    }  
});