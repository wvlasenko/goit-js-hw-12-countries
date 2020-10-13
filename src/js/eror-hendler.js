
function handleErors(respons) {
  if (respons.ok) {
    return respons.json();
  } else {
    baseAlert();
  }
}
exsport default handleErors;