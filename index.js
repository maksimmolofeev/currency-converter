const inputRubles = document.querySelector('.input_rubles');
const btnNode = document.querySelector('.btn');
const numberDollar = document.querySelector('.dollar_field');
const numberLyre = document.querySelector('.lyre_field');

// Перевод в доллары
function quantityDollars(number) {
    let dollar = number / 60.25;
    let answerDollar = Math.round(dollar * 100) / 100;
    console.log = (answerDollar);
    numberDollar.innerHTML = `<p>${answerDollar}</p>`;
};

// Перевод в лиры
function quantityLyre(number) {
    let lyre = number / 3.24;
    let answerLyre = Math.round(lyre * 100) / 100;
    numberLyre.innerHTML = `<p>${answerLyre}</p>`;
}

// Получение кол-ва рублей
btnNode.addEventListener('click', () => {
    let number = inputRubles.value;
    console.log(number);
    quantityDollars(number);
    quantityLyre(number);
});

