'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Empieza a adivinar...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No hay número 😔👌';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        'Adivinaste perrita! 🎉💖🐶';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent =
        '¡Te pasaste perra estupida! 😠🚫🐶📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent =
        '¡Te falta perra estupida! 😠🚫🐶📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent =
      'PERDEDORA DE MIERDA 💩💩💩';
  }
});
