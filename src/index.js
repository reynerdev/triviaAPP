import './style.scss';
import { fetchCategory } from './start.js';
import {
  retrieveQuestion,
  idInterval,
  restoreElements,
} from './retrieveQuestions.js';
import { selected } from './utils.js';

const containerStartElement = (value) => {
  let containerStartGameElement = document.getElementsByClassName(
    'containerStartGame'
  )[0];
  containerStartGameElement.style.display = value;
};

const containerElement = (value) => {
  let container = document.getElementById('container');
  container.style.display = value;
};

window.onload = fetchCategory;

containerStartElement('none');

document.querySelectorAll('.btn--selection').forEach((element) => {
  element.addEventListener('click', function () {
    ;
    this.classList.toggle('active');
    console.log(this.name, 'nombre');
  });
});

let againButtonElement = document.getElementById('againButton');
againButtonElement.addEventListener('click', function () {
  containerElement('flex');
  document.body.style.overflowY = ''
  containerStartElement('none')
});

let startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
  document.body.style.overflowY = 'auto'
  containerElement('none');
  clearInterval(idInterval);
  retrieveQuestion(selected);
  containerStartElement('block');
  restoreElements();

});
