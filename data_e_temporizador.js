
function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime();
    const tempoRestante = dataFutura - agora;
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
    return { dias, horas, minutos, segundos };
}
function atualizarTemporizador() {
    const dataFutura = new Date("2024-12-31T23:59:59").getTime();
    const { dias, horas, minutos, segundos } = calcularTempoRestante(dataFutura);
    console.clear();
    console.log(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
    if (dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0) {
        clearInterval(intervalo); // Para o temporizador quando atingir 0
        console.log("Contagem finalizada!");
    }
}
const intervalo = setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();
