let phrases = [
  {
    text: 'отправить другу смешную гифку',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif',
  },
  {
    text: 'посмотреть скидки на авиабилеты',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png',
  },
  {
    text: 'разобраться, о чём поют рэперы',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png',
  },
  {
    text: 'Юрий Дудь',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png',
  },
  {
    text: 'расставить книги на полке по цвету',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png',
  },
  {
    text: 'читать про зарплаты в Сан-Франциско',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png',
  },
  {
    text: 'прочитать новости и ужаснуться в комментариях',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png',
  },
  {
    text: 'попасть в поток грустных песен и вспомнить все ошибки молодости',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png',
  },
  {
    text: 'посмотреть трейлер сериала и заодно первый сезон',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png',
  },
  {
    text: 'проверить непрочитанное в Telegram-каналах',
    image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png',
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
