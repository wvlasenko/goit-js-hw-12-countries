import fetchCountry from './country-fetch.js';
import createMarkup from './markup-builder.js';

const debounce = require('debounce');
const refs = {
  input: document.querySelector('.country-name'),
  output: document.querySelector('.country-container'),
};

const inputCountryName = refs.input.addEventListener(
  'input',
  debounce(() => {
    const searchQuery = refs.input.value;
    refs.output.innerHTML = '';

    if (searchQuery !== '') {
      fetchCountry(searchQuery).then(data => {
        injectMarkup(data);
      });
    }
  }, 500),
);

function injectMarkup(data) {
  const markup = createMarkup(data);
  if (markup !== undefined) {
    refs.output.insertAdjacentHTML('beforeend', markup);
  }
}
