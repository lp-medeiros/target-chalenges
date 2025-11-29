const radioFixo = document.getElementById('json-fixo');
const radioManual = document.getElementById('json-manual');
const textarea = document.getElementById('json-input');
const btnCalcular = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

// Carrega JSON automaticamente ao abrir a página
async function carregarJsonFixo() {
    const response = await fetch('/api/test-data/estoque');
    const data = await response.json();
    textarea.value = JSON.stringify(data, null, 2);
}

radioFixo.addEventListener('change', carregarJsonFixo);

// Carrega o JSON ao iniciar a página (já que JSON Fixo vem marcado por padrão)
carregarJsonFixo();

radioManual.addEventListener('change', () => {
    textarea.value = '';
});

btnCalcular.addEventListener('click', async () => {
    try {
        const jsonData = JSON.parse(textarea.value);

        const response = await fetch('/api/estoque', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        });

        const result = await response.json();
        resultado.textContent = JSON.stringify(result, null, 2);

    } catch(error) {
        alert('JSON invalido. Verifique a sintaxe.');
    }
});