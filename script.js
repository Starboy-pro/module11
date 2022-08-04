let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
if (minValue == NaN) {
    minValue = 0;
}
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (maxValue == NaN) {
    maxValue = 100
}
/*if ((maxValue || minValue) == NaN) {
    minValue = 0;
    maxValue = 100;
}*/

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//кнопка заново
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    alert('Начнём игру заново!');
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}`)
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            switch (phraseRandom) {
                case '0':
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                case '1': 
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                case '2':
                    answerPhrase = `Это невозможно...\n\u{1F630}`;
                default:
                    answerPhrase = `Вы не правы, игра окончена...\n\u{1F608}`;
            }
            /*const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;*/

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            if  (phraseRandom == 0) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom == 1) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else if (phraseRandom == 2) {
                answerPhrase = `Это невозможно...\n\u{1F630}`;
            } else {
                answerPhrase = `Вы не правы, игра окончена...\n\u{1F608}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2)
        if  (phraseRandom == 0) {
            answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
        } else if (phraseRandom == 1) {
            answerPhrase = `Я тебя победил \n\u{1F60F}`;
        } else if (phraseRandom == 2) {
            answerPhrase = `Это было не трудно \n\u{1F47B}`;
        } else {
            answerPhrase = `Меня не переиграть...\n\u{1F648}`;
        }
        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
