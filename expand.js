let buttonExpand = document.querySelector('.expand');
let boxExpandir = document.querySelector('.expandir');
let playerMain = document.querySelector('.playerMain');
let indiceExpand = 0;
buttonExpand.addEventListener('click', () =>{
    if(indiceExpand == 0){
        playerMain.style.bottom = '-100%';
        buttonExpand.src = 'imagens/expandmore.png';
        document.body.appendChild(boxExpandir);
        boxExpandir.style.top = '80%';
        indiceExpand = 1;
    }else{
        playerMain.appendChild(boxExpandir);
        boxExpandir.style.top = '-50px'
        playerMain.style.bottom = '0%';
        buttonExpand.src = 'imagens/expandless.png';
        indiceExpand = 0;
    }
});


