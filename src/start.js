// fill our dropdown menu with the categories

const TOKEN =
  'a1ed8e86dfe01dace26fa6ed96d0a0c69b3f936fc6d19c35c744ff7610fcd0f0';

const fetchCategory = () => {
  fetch('https://opentdb.com/api_category.php')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let dropdownHtml = createDropdown(data.trivia_categories);

      updateDropdown(dropdownHtml);
    });
};

const createDropdown = (data) => {
  let dropdownHtml = '';
  data.forEach((element) => {
    dropdownHtml = `${dropdownHtml}  <li><a  idValue =${element.id}>${element.name}</a></li>`;
  });
  return dropdownHtml;
};

const updateDropdown = (dropdownHtml) => {
  console.log(dropdownHtml, 'Hola');
  let dropdownCategory = document.getElementById('dropdownId');
  dropdownCategory.innerHTML = '';
  dropdownCategory.innerHTML = dropdownHtml;
};

export { fetchCategory };
