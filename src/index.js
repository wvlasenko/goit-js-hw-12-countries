import './styles.css';
import countryTpl from './templates/country.hbs';
import countriesTpl from './templates/countries.hbs';
const debounce = require('debounce');

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url).then(response => handleErors(response));
}

function handleErors(respons) {
  if (respons.ok) {
    return respons.json();
  } else {
    baseAlert();
  }
}

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

function createMarkup(arrOfCountries) {
  let markup;
  if (!arrOfCountries) {
    return;
  } else if (arrOfCountries.length > 10) {
    baseInfo();
  } else if (arrOfCountries.length <= 10 && arrOfCountries.length >= 2) {
    markup = countriesTpl(arrOfCountries);
    return markup;
  } else if (arrOfCountries.length < 2) {
    markup = countryTpl(arrOfCountries);
    return markup;
  }
}

function injectMarkup(data) {
  const markup = createMarkup(data);
  if (markup !== undefined) {
    refs.output.insertAdjacentHTML('beforeend', markup);
  }
}
