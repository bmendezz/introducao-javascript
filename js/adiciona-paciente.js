// Evento Botão adicionar.
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    // trecho adiciona formulário em variável
    var form = document.querySelector('#form-adiciona');

    // extrai valores dos formularios 
    var paciente = obtemInformacoesDoForm(form);
    console.log(paciente)

    // create elemente, to insert new elements on html.
    var pacienteTr = montaTr(paciente);

    // capturar tabela para appendChild.
    var table = document.querySelector('#tabela-pacientes')
    table.appendChild(pacienteTr);

    //Limpa formulario
    form.reset();

})

// functions

function obtemInformacoesDoForm(form) {

    var paciente = {
        // extraindo informações do paciente do form.
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value).toFixed(2)

    }

    return (paciente);

}

function montaTr(paciente){
    var pacienteTr = document.createElement('tr') // ? cria linha da tabela. Table Row.
    pacienteTr.classList.add('paciente');
    
    var nomeTd = montaTd(paciente.nome,'info-nome');
    var pesoTd = montaTd(paciente.peso,'info-peso');
    var alturaTd = montaTd(paciente.altura,'info-altura');
    var gorduraTd = montaTd(paciente.gordura,'info-gordura');
    var imcTd = montaTd(paciente.imc,'info-imc');

    // assign valores variaveis para colunas.
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // adicionar valores à tabela 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

//Recebe parametro de informção do PACIENTE e também a classe das TD.
function montaTd(dado,classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}