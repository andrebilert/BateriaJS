function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);  
    
    try {
        elemento.play();
    } catch (error) {
        console.log('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {
        console.log(evento);//Para saber o que passamos para o evento onkeydown
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        };
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        };
    }

}
