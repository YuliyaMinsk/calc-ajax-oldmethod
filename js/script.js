const inputRub = document.getElementById('rub');
const inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      console.log(data);
      inputUsd.value = (+inputRub.value / data.Valute.USD.Value).toFixed(2);
    } else {
      console.log('Something is going wrong... Try again!')
    }
  });
});

inputUsd.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputRub.value = (+inputUsd.value * data.Valute.USD.Value).toFixed(2);
    } else {
      console.log('Something is going wrong... Try again!')
    }
  });
});

