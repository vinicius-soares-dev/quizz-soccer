const quizzOne = document.querySelector('.quizzOne');
const quizzTwo = document.querySelector('.quizzTwo');
const quizzThree = document.querySelector('.quizzThree');
const quizzFour = document.querySelector('.quizzFour');
const quizzFive = document.querySelector('.quizzFive');
const inputOne = document.querySelector('.scoreInput');
const inputTwo = document.querySelector('.playerInput');
const inputThree = document.querySelector('.gameInput');
const inputFour = document.querySelector('.yearInput');
const inputFive = document.querySelector('.NumberInput');
const btnOne = document.querySelector('.btn');
const btnTwo = document.querySelector('.btnPlayer');
const btnThree = document.querySelector('.btnGame');
const btnFour = document.querySelector('.btnYear');
const btnFive = document.querySelector('.btnNumberPlayer');
const msgError = document.querySelector('.description');
const tittle = document.querySelector('.tittle-resume');
const paragraph = document.querySelector('.paragraph-resume');
const restartQuizz = document.querySelector('.restartquizz');
const linkDeveloper = document.querySelector('.linkDeveloper');
const msgWins = document.querySelector('.wins');
const msgFails = document.querySelector('.fails');
let erros = [];
let acertos = [];

btnOne.addEventListener('click', (event) => {
    event.preventDefault();
    if(!inputOne.value || inputOne.value == null || inputOne.value == undefined) {
        msgError.textContent = 'Digite alguma coisa';
        return;
    };

    if(inputOne.value.toLowerCase() !== 'quarentinha') {
        erros.push('1');
        quizzOne.style.display = 'none';
        quizzTwo.style.display = 'flex';
    };

    if(inputOne.value.toLowerCase() == 'quarentinha') {
        acertos.push('1');
        quizzOne.style.display = 'none';
        quizzTwo.style.display = 'flex';
    };
});

btnTwo.addEventListener('click', (event) => {
    event.preventDefault();
    if(!inputTwo.value || inputTwo.value == null || inputTwo.value == undefined) {
        msgError.textContent = 'Digite alguma coisa';
        return;
    };

    if(inputTwo.value.toLowerCase() !== 'gatito') {
        erros.push('1');
        quizzTwo.style.display = 'none';
        quizzThree.style.display = 'flex';
    };

    if(inputTwo.value.toLowerCase() == 'gatito') {
        acertos.push('1');
        quizzTwo.style.display = 'none';
        quizzThree.style.display = 'flex';
    };
});

btnThree.addEventListener('click', (event) => {
    event.preventDefault();
    if(!inputThree.value || inputThree.value == null || inputThree.value == undefined) {
        msgError.textContent = 'Digite alguma coisa';
        return;
    };

    if(inputThree.value.toLowerCase() !== 'marilia') {
        erros.push('1');
        quizzThree.style.display = 'none';
        quizzFour.style.display = 'flex';
    };

    if(inputThree.value.toLowerCase() == 'marilia') {
        acertos.push('1');
        quizzThree.style.display = 'none';
        quizzFour.style.display = 'flex';
    };
});

btnFour.addEventListener('click', (event) => {
    event.preventDefault();
    if(!inputFour.value || inputFour.value == null || inputFour.value == undefined) {
        msgError.textContent = 'Digite alguma coisa';
        return;
    };

    if(inputFour.value.toLowerCase() !== '1968') {
        erros.push('1');
        quizzFour.style.display = 'none';
        quizzFive.style.display = 'flex';
    };

    if(inputFour.value.toLowerCase() == '1968') {
        acertos.push('1');
        quizzFour.style.display = 'none';
        quizzFive.style.display = 'flex';
    };
});

btnFive.addEventListener('click', (event) => {
    event.preventDefault();
    if(!inputFive.value || inputFive.value == null || inputFive.value == undefined) {
        msgError.textContent = 'Digite alguma coisa';
        return;
    };

    if(inputFive.value.toLowerCase() !== '48') {
        erros.push('1');
        quizzFive.style.display = 'none';
        tittle.textContent = 'Esse foi seu Resultado:';
        paragraph.style.display = 'none';
        linkDeveloper.style.display = 'block';
        msgError.style.display = 'none';
        restartQuizz.style.display = 'flex';
        msgWins.textContent = acertos.length;
        msgFails.textContent = erros.length;
    };

    if(inputFive.value.toLowerCase() == '48') {
        acertos.push('1');
        quizzFive.style.display = 'none';
        tittle.textContent = 'Esse foi seu Resultado:';
        paragraph.style.display = 'none';
        linkDeveloper.style.display = 'block';
        msgError.style.display = 'none';
        restartQuizz.style.display = 'flex';
        msgWins.textContent = acertos.length;
        msgFails.textContent = erros.length;
    };
});