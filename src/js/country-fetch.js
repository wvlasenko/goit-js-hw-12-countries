import handleErors from './eror-hendler.js';

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(response => handleErors(response));
}
