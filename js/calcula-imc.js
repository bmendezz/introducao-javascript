var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var sub = document.querySelector('.sub');
sub.textContent = 'Meus pacientes'


// Extrai valores de peso altura para calcular IMC.

var pacientes = document.querySelectorAll('.paciente');

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var boolPeso = true;
    var boolAltura = true;


    if (altura <= 0 || altura >= 3) {
        boolAltura = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("peso-invalido");

    }
    if (peso <= 0 || peso >= 400) {
        boolPeso = false;
        document.querySelector('.info-imc').textContent = 'Peso Inválido'
        paciente.classList.add("altura-invalida")
    }


    if (boolAltura && boolPeso) {
        imc = calculaimc(peso,altura);
        tdImc.textContent = imc.toFixed(2);

    }

    function calculaimc(peso, altura) {
        imc = 0;

        imc = peso / (altura * altura);
        return (imc);
        console.log(imc)

    }
}

function validaPeso(peso){
    if (peso > 0 && peso <= 400){
        return true;
    }else{
        return false;
    }
}