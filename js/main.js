//VARIAVEIS ARMAZENADAS REFERENTE AOS SPAN DO HTML
let span_1 = document.getElementById('span-1').innerHTML = '00';
let span_2 = document.getElementById('span-2').innerHTML = '00';
let span_3 = document.getElementById('span-3').innerHTML = '00';

//VARIAVEL REFERENTE AO PARAGRAFO DA DATA DE ENTRADA 
const dataEntrada = document.getElementById('data-entrada');

//VARIAVEL REFERENTE AO PARAGRAFO DA HORA 
const horaEntrada = document.getElementById('hora-entrada');

//VARIAVEIS REFETENTE AO TIMER;
let hora = 0;
let minuto = 0;
let segundo = 0;
let cronometro;
const tempo = 1000;

function marcarHora() {
    const hora = new Date();
    const horaAtual = hora.getHours() < 10 ? `0${hora.getMinutes()}` : hora.getHours();
    const minutoAtual = hora.getMinutes() < 10 ? `0${hora.getMinutes()}` : hora.getMinutes();
    const segundoAtual = hora.getSeconds();
    horaEntrada.style.fontSize = '20px';
    return horaEntrada.innerHTML = `Horário em Rio de Janeiro ${horaAtual}:${minutoAtual}h`;
}

//FUNÇÃO QUE RETORNA A DATA ATUAL --> ================= PAREI AQUI
function marcarData() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    dataEntrada.style.fontSize = '20px';
    return dataEntrada.innerHTML = (`Entrada: ${dia} / 0${mes + 1} / ${ano}`)
}


//FUNÇÃO REFERENTE A LOGICA DO CRONOMETRO
function timer() {
    if (segundo === 60) {
        segundo = 0;
        minuto++;

    } else if (minuto === 60) {
        hora++;
        minuto = 0;
    }
    let span_1 = document.getElementById('span-1').innerHTML = hora > 10 ? hora : `0${hora}`;
    let span_2 = document.getElementById('span-2').innerHTML = minuto > 10 ? minuto : `0${minuto}`
    let span_3 = document.getElementById('span-3').innerHTML = segundo >= 10 ? segundo : `0${segundo}`;
}

//FUNCAO QUANDO O BOTAO DE INICIAR É DISPARADO
function iniciar() {
    pausar()
    marcarData()
    marcarHora()
    cronometro = setInterval(() => {
        segundo++
        if (minuto > 20) {
            let p = document.getElementById('paragrafo').style.color = 'red';
        }
        timer();
    }, tempo)
}
//FUNCAO QUANDO O BOTAO DE PARAR É DISPARADO
function pausar() {
    clearInterval(cronometro)
}

//FUNCAO QUANDO O BOTAO DE ZERAR É DISPARADO
function zerar() {
    pausar()
    let span_1 = document.getElementById('span-1').innerHTML = `0${hora = 0}`;
    let span_2 = document.getElementById('span-2').innerHTML = `0${minuto = 0}`;
    let span_3 = document.getElementById('span-3').innerHTML = `0${segundo = 0}`;
}



