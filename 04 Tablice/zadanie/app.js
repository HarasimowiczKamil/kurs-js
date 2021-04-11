(function (searchInput, resultDiv, cities) {
    searchInput.addEventListener(
    'keyup',
    (event) => {
      const searchWord = event.target.value;
      // @TODO wyszukiwanie w cities
      resultDiv.innerHTML = `Brak miast zawierających frazę "${searchWord}"`;
    }
  );

})(
  document.getElementById('search'),
  document.getElementById('results'),
  cities
);
