import countryTpl from '../templates/country.hbs';
import countriesTpl from '../templates/countries.hbs';

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

export default createMarkup;
