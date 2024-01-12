const caixaPai = document.createElement('div');
const caixaPopUp = document.createElement('div');
const texto = document.createElement('p');
const coracao = document.createElement('div');
document.body.appendChild(caixaPai);
caixaPai.classList.add('anuncioPai');
caixaPopUp.classList.add('popUp')
caixaPai.style.height = `${window.innerHeight}px`
caixaPai.appendChild(caixaPopUp);
caixaPopUp.appendChild(texto);
caixaPopUp.appendChild(coracao);
coracao.classList.add('coracao')
texto.innerHTML = 'Este site é destinado a minha princesa heloisa';
coracao.innerHTML = '❤';

 var intervalo = setInterval(() => {
     caixaPai.style.display = 'none';
 }, 3000);
 clearInterval()


