import './style.scss';
import { fetchCategory } from './start.js';

window.onload = fetchCategory;
console.log(document.querySelector('.dropdown'));
document
  .querySelector('.btn--selection')
  .addEventListener('click', function () {
    console.log(this);
    this.classList.toggle('active');
  });
