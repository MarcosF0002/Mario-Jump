const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvens = document.querySelector('.nuvens');

const começar = () => {
    document.getElementById("start").style.color = "white";
    tubo.classList.add('tubo-animation');
    mario.src = './Imagens/mario.gif';
    mario.style.width = '150px';
    nuvens.classList.add('nuvens-animation');

    document.getElementById("start").style.color = "white";
         
}
document.addEventListener('keydown', começar);

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }
    , 500);
}
document.addEventListener('keydown', jump);


const checkGameOver = setInterval(() => {
    const posiTubo = tubo.offsetLeft;
    const posiMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    const posinuvens = nuvens.offsetLeft;

    if (posiTubo <= 120 && posiTubo > 0 && posiMario < 80){
        tubo.style.animation ='none';
        tubo.style.left = `${posiTubo}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${posinuvens}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${posiMario}px`;


        mario.src = './Imagens/gameover.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '60px';

            document.getElementById("start").style.color = "black";
            document.getElementById("start").innerHTML="<strong> GAME OVER</storng>";

        clearInterval(checkGameOver);
    }
}, 10);