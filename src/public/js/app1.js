const radioFixo = document.getElementById('json-fixo');
const radioManual = document.getElementById('json-manual');
const textarea = document.getElementById('json-input');
const btnCalcular = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

async function carregarJsonFixo() {
    const response = await fetch('/api/test-data/comissoes');
    const data = await response.json();
    textarea.value = JSON.stringify(data, null, 2);
}

radioFixo.addEventListener('change', carregarJsonFixo);

carregarJsonFixo();

radioManual.addEventListener('change', () => {
    textarea.value = '';
});

btnCalcular.addEventListener('click', async () => {
    try {
        const jsonData = JSON.parse(textarea.value);

        const response = await fetch('/api/comissoes', {
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