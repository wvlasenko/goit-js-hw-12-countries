function handleErors(respons) {
  if (respons.ok) {
    return respons.json();
  } else {
    baseAlert();
  }
}
export default handleErors;
