const inputRubles = document.querySelector('.input_rubles');
const btnNode = document.querySelector('.btn');
const containerEl = document.querySelector('.working_field');
const container =document.querySelector('.container')
const select = document.querySelector('select')

function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
  }

const currencyDictionary = {
    "EUR": "Евро",
    "USD": "Доллары",
    "TRY": "Лиры",
    "RUB": "Рубли"
}

// Получение кол-ва рублей
btnNode.addEventListener('click', async () => {
    console.log(select.value);
    let number = inputRubles.value;

    console.log(await (await fetch('https://www.cbr-xml-daily.ru/latest.js')).json());
    console.log(await fetch('https://www.cbr-xml-daily.ru/latest.js'));


    const { rates } = await (await fetch('https://www.cbr-xml-daily.ru/latest.js')).json();

    container.classList.add('active');

    containerEl.innerHTML = '';

    Object.keys(rates).forEach((currencyCode)=> {
        const title = currencyDictionary[currencyCode];

        console.log(title);

        if (title) {
            containerEl.append(createElementFromHTML(`<div class="block_currency">
                <h2>${title}</h2>
                <div class="currency_field">
                    <p>${Math.round(number * rates[currencyCode] * 100) / 100}</p>
                </div>
            </div>`));
        }
    });
});

// try..catch