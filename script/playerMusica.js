//Arrays com musicas "Lista"
let musicas = [
    {
        titulo: 'musicas que me lembram você',
        src:'musicas/macmiller congratulations.mp3'
    },
    {
        titulo: 'musicas que me lembram você',
        src:'musicas/rufus innerbloom.mp3'
    },
    {
        titulo: 'musicas que me lembram você',
        src:'musicas/yunkvino favorita.mp3'
    }

]
let musica = document.querySelector('audio');
const botaoPlay = document.querySelector('.botao-play');
const botaoPause = document.querySelector('.botao-pause');
let duracaoMusica = document.querySelector('.fim');

let indexMusica = 0;



let imagemMusica = document.querySelector('.albumMusica')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

let proximo = document.querySelector('.proximo');
let anterior = document.querySelector('.anterior');
anterior.addEventListener('click', () => {
    indexMusica = indexMusica - 1 < musicas.length - musicas.length ? 2 : indexMusica - 1;
    renderizarMusica(indexMusica);
});
proximo.addEventListener('click', () => {
    indexMusica = indexMusica + 1 > musicas.length - 1 ? 0 : indexMusica + 1;
    renderizarMusica(indexMusica);
});



function renderizarMusica(index) {
    pausarMusica();
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        // imagemMusica.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    
};
renderizarMusica(indexMusica);


//Eventos
botaoPlay.addEventListener('click', tocarMusica);
botaoPause.addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);


//Funções
function pausarMusica() {
    musica.pause();
    botaoPause.style.display = 'none';
    botaoPlay.style.display = 'block'
}

function tocarMusica() {
    musica.play();
    botaoPause.style.display = 'block';
    botaoPlay.style.display = 'none'


};
function atualizarBarra() {
    let barra = document.querySelector('progress');
    var porcentagem = Math.floor((musica.currentTime / musica.duration) * 100);
    barra.style.width = `${porcentagem}%`;
    let tempoCorrido = document.querySelector('.inicio');
    tempoCorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
};
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    var campoSegundos = segundos % 60;
    campoSegundos = campoSegundos < 10 ? '0' + campoSegundos : campoSegundos;
    return campoMinutos + ':' + campoSegundos
};
