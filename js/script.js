const inputRUB = document.getElementById('rub');
const inputBYR = document.getElementById('byn');
const inputUSD = document.getElementById('usd');

const currencyArray = [inputRUB, inputBYR, inputUSD];

const request = new XMLHttpRequest();
request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
request.send();

request.addEventListener('load', () => {
  if (request.status === 200) {
    const data = JSON.parse(request.response);

    currencyArray.forEach(currencyCur => {
      currencyCur.addEventListener('input', () => {
        currencyArray.forEach(currency => {  
          if (currencyCur.id != currency.id) {
            if (currencyCur.id === 'rub') {
              currency.value = (+currencyCur.value / data.Valute[`${currency.id.toUpperCase()}`].Value).toFixed(2);
            } else {
              if (currency.id === 'rub') {
                currency.value = (+currencyCur.value * data.Valute[`${currencyCur.id.toUpperCase()}`].Value).toFixed(2);
              } else {
                currency.value = ((+currencyCur.value * data.Valute[`${currencyCur.id.toUpperCase()}`].Value) / 
                                data.Valute[`${currency.id.toUpperCase()}`].Value).toFixed(2);
              }
            }
          } 
        });
      });
    })
  } else {
    console.log('Something is going wrong... Try again!')
  }
});
