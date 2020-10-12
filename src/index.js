import './styles.css';

// fetch('https://restcountries.eu/rest/v2/name/{name}');

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
