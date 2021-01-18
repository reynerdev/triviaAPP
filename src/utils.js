import croosSVG from './img/cross.svg';

const TOKEN =
  'a1ed8e86dfe01dace26fa6ed96d0a0c69b3f936fc6d19c35c744ff7610fcd0f0';

export default TOKEN;

const selected = {
  category: '',
  category_name: 'Any',
  dificulty: 'Any',
  type: 'Any',
};

const selection = (type) => {
  console.log(type);
};

class creandoObserver {
  constructor(selectedValues) {
    this.selectedValues = selectedValues;
    this.observers = [];
  }

  selectedValuesChanged(selectedValues) {
    this.selectedValues = selectedValues;
    this.notifyObservers(this);
  }

  addObserver(o) {
    this.observers.push(o);
  }

  notifyObservers() {
    for (let o of this.observers) {
      o.update(this);
    }
  }
}

class ElementObserver {
  constructor() {
    this.categoryElement = document.getElementById('categoryBox');
    this.difficultyElement = document.getElementById('difficultyBox');
    this.typeElement = document.getElementById('typeBox');
  }

  update(model) {
    console.log('UPDATE', document);
    // Creating our button's html content to insert  either on the caterogyElement
    // We need to create differents elements for each button because we're passing a reference, and at the end it ends up in the last button
    let cross = document.createElement('span');
    let probando = 'probando';
    cross.classList.add('btn__cross');
    let img = document.createElement('img');
    img.src = croosSVG;
    img.style.height = '12px';
    img.style.width = '12px';
    let spanText = document.createElement('span');
    spanText.classList = 'btn__textSelection';
    // spanText.innerText = 'model.selectedValues';
    //append part
    cross.appendChild(img);

    console.log(
      model.selectedValues,
      this.categoryElement,
      this.difficultyElement,
      this.typeElement
    );
    // Check if our category_name is empty. If so, clean the category box, otherwise, render the category name
    if (model.selectedValues['category_name'] !== 'Any') {
      this.categoryElement.innerHTML = '';
      // add a function when click cross to unselect the category option
      cross.addEventListener('click', function () {
        model.selectedValues.category_name = 'Any';
        model.selectedValues.category = '';
        model.notifyObservers();
        console.log('selected', selected);
      });
      console.log(probando);
      this.categoryElement.appendChild(cross);
      spanText.innerText = model.selectedValues['category_name'];
      this.categoryElement.appendChild(spanText);
    } else if (model.selectedValues['category_name'] === 'Any') {
      this.categoryElement.innerHTML = '';
      console.log('Any in category_name', spanText);
      spanText.innerText = 'Any';
      this.categoryElement.appendChild(spanText);
      console.log(this.categoryElement);
    }
    cross = document.createElement('span');
    cross.classList.add('btn__cross');
    img = document.createElement('img');
    img.src = croosSVG;
    img.style.height = '12px';
    img.style.width = '12px';
    spanText = document.createElement('span');
    spanText.classList = 'btn__textSelection';
    cross.appendChild(img);
    if (model.selectedValues['dificulty'] !== 'Any') {
      this.difficultyElement.innerHTML = '';
      cross.addEventListener('click', function () {
        model.selectedValues.dificulty = 'Any';
        model.notifyObservers();
        console.log('selected', selected);
      });
      this.difficultyElement.appendChild(cross);
      spanText.innerText = model.selectedValues['dificulty'];
      this.difficultyElement.appendChild(spanText);
    } else if (model.selectedValues['dificulty'] === 'Any') {
      console.log('Any in Dificulty');

      this.difficultyElement.innerHTML = '';
      spanText.innerText = 'Any';
      this.difficultyElement.appendChild(spanText);
      console.log(selected);
    }
    console.log('Existe Cross 2', cross);
    cross = document.createElement('span');
    cross.classList.add('btn__cross');
    img = document.createElement('img');
    img.src = croosSVG;
    img.style.height = '12px';
    img.style.width = '12px';
    spanText = document.createElement('span');
    spanText.classList = 'btn__textSelection';
    cross.appendChild(img);

    if (model.selectedValues['type'] !== 'Any') {
      this.typeElement.innerHTML = '';
      cross.addEventListener('click', function () {
        model.selectedValues.type = 'Any';
        model.notifyObservers();
        console.log('selected', selected);
      });
      console.log('InsideType');
      this.typeElement.appendChild(cross);
      spanText.innerText = model.selectedValues['type'];
      this.typeElement.appendChild(spanText);
    } else if (model.selectedValues['type'] === 'Any') {
      console.log('Any in Type');
      this.typeElement.innerHTML = '';
      spanText.innerText = 'Any';
      this.typeElement.appendChild(spanText);
    }

    console.log('END UPDATE');
  }
}

export { selection, selected, creandoObserver, ElementObserver };
