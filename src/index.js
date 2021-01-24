import './style.scss';
import { fetchCategory, selectedValues } from './start.js';
import { bullet } from './bullet.js';
import { manejadorPreguntas, retrieveQuestion } from './retrieveQuestions.js';
// window.onload = fetchCategory;
document.querySelectorAll('.btn--selection').forEach((element) => {
  element.addEventListener('click', function () {
    console.log(this);
    this.classList.toggle('active');
    console.log(this.name, 'nombre');
  });
});

let container = document.getElementById('container');
container.style.display = 'none';

let startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
  let container = document.getElementById('container');
  container.style.display = 'none';
});

retrieveQuestion();
// document
//   .querySelector('.btn--selection')
//   .addEventListener('click', function () {
//     console.log(this);
//     this.classList.toggle('active');
//   });
