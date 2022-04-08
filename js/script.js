const inputRub = document.getElementById('rub');
const inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', './js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      console.log(data.current.usd);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      console.log('Something is going wrong... Try again!')
    }
  });
});

inputUsd.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', './js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      console.log(data.current.usd);
      inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
    } else {
      console.log('Something is going wrong... Try again!')
    }
  });
});

