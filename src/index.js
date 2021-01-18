import './style.scss';
import { fetchCategory, selectedValues } from './start.js';

window.onload = fetchCategory;
// console.log(document.querySelector('.dropdown'));
// console.log(document.querySelector('.btn--selection'), 'ss');

document.querySelectorAll('.btn--selection').forEach((element) => {
  element.addEventListener('click', function () {
    console.log(this);
    this.classList.toggle('active');
    console.log(this.name, 'nombre');
  });
});
// document
//   .querySelector('.btn--selection')
//   .addEventListener('click', function () {
//     console.log(this);
//     this.classList.toggle('active');
//   });
