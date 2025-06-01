const dataInicial = new Date('2025-08-28T00:00:00');

function atualizarContagem() {
    const dataAtual = new Date();
    const diferenca = dataAtual - dataInicial;

    const dias = Math.floor(Math.abs(diferenca) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((Math.abs(diferenca) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((Math.abs(diferenca) % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((Math.abs(diferenca) % (1000 * 60)) / 1000);

    const texto = diferenca >= 0 
        ? `Já se passaram ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos desde a data do meu amor`
        : `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para a data do meu amor`;

    document.getElementById('dias').textContent = texto;
}

setInterval(atualizarContagem, 1000);

let indiceAtual = 0;

function mostrarProximoSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    indiceAtual = (indiceAtual + 1) % totalSlides;
    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

setInterval(mostrarProximoSlide, 5000);