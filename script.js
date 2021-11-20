const calcular = document.getElementById('calcular');


function poupanca () {
    let nome = document.getElementById('nome').value;
    let v_aplicado = document.getElementById('v_aplicado').value;
    let i = document.getElementById('i').value;
    let n = document.getElementById('n').value;
    var resultado = document.getElementById('resultado');

    if (nome !== '' && v_aplicado !== '' && i !== '' && n !== '') {
        
       let taxa = i/100
       var p = ((1+taxa)**n-1)/taxa
       var vf = v_aplicado*p.toFixed(2)
       
        resultado.textContent = `Olá, ${nome}! Se você aplicar R$${v_aplicado}, à taxa de juros de ${i}% ao mês, durante ${n} meses, acumulará uma poupança de R$${vf} `;

    }else {
        resultado.textContent = 'Para simular o valor poupado, preencha todos os campos.';
    }

}
calcular.addEventListener('click', poupanca);
