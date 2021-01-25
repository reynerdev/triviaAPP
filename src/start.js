// fill our dropdown menu with the categories
import TOKEN from './utils';
import { selected, creandoObserver, ElementObserver } from './utils';
import 'animate.css';
const fetchCategory = () => {
  fetch('https://opentdb.com/api_category.php')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, 'Fetched');

      //start with the button at any. At the beginning select is filled with any
      let observer = new creandoObserver(selected);
      let elementObserver = new ElementObserver();
      observer.addObserver(elementObserver);
      observer.selectedValuesChanged(selected);
      //////////////////////
      console.log('BEFORE createDropdown');

      let dropdownHtml = createDropdown(data.trivia_categories, 'category');
      updateDropdown(dropdownHtml, 'dropdownId-1');

      //Create list for dificulty
      console.log('dificulty');
      let dropdownHtml_ = createDropdown(
        [
          { id: 0, name: 'Easy' },
          { id: 1, name: 'Medium' },
          { id: 2, name: 'Hard' },
        ],
        'dificulty'
      );
      updateDropdown(dropdownHtml_, 'dropdownId-2');

      console.log('Type');

      let dropdownHtml2 = createDropdown(
        [
          { id: 0, name: 'Multiple Choice' },
          { id: 1, name: 'True / False' },
        ],
        'type'
      );
      updateDropdown(dropdownHtml2, 'dropdownId-3');

      let btnStart = document.getElementsByClassName('btn--start');
      btnStart[0].addEventListener('click', () => {});
    })
    .catch((err) => console.log(err));
};

const createDropdown = (data, typeOfDropdown) => {
  let dropdownHtml = '';

  let liArray = [];

  data.forEach((element) => {
    let option = document.createElement('li');
    let observer = new creandoObserver(selected);

    option.setAttribute('typeOfDropdown', typeOfDropdown);
    option.innerHTML = `<a  idValue =${element.id} type=${typeOfDropdown} '>${element.name}</a>`;

    let elementObserver = new ElementObserver();
    observer.addObserver(elementObserver);
    // observer.selectedValuesChanged(selected); //Fill with the initial values of selectedValues in utils ('Any)

    console.log('Starting to add AddEvent Listeners');
    option.addEventListener('click', function () {
      if (typeOfDropdown === 'category') {
        console.log('adding category event');
        selected.category = element.id;
        selected.category_name = element.name;
        observer.selectedValuesChanged(selected);
      } else if (typeOfDropdown === 'dificulty') {
        console.log('adding difficulty event');
        selected.dificulty = element.name;
        observer.selectedValuesChanged(selected);
      } else {
        console.log('adding Type event');

        element.name === 'Multiple Choice'
          ? (selected.type = 'Multiple Choice')
          : (selected.type = 'False / True ');

        observer.selectedValuesChanged(selected);
      }
    });

    liArray.push(option);

    // dropdownHtml = `${dropdownHtml}  <li><a  idValue =${element.id} type=${typeOfDropdown} )'>${element.name}</a></li>`;
  });
  return liArray;
};

const updateDropdown = (dropdownHtml, idDropdown) => {
  let dropdownCategory = document.getElementById(idDropdown);
  dropdownHtml.forEach((element) => dropdownCategory.appendChild(element));
};

export { fetchCategory };
