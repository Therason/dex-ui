var testData = {
  blubasaur: "Bulbasaur",
  ivysaur: "Ivysaur",
  venusaur: "Venusaur",
  squirtle: "Squirtle",
  wartortle: "Wartortle",
  blastoise: "Blastoise",
  charmander: "Charmander",
  charmeleon: "Charmeleon",
  charizard: "Charizard"
};

console.log(testData.ivysaur);

// DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
  var searchBar = document.getElementById('search-bar');
  var results = document.getElementById('search-results');

  // search through data
  searchBar.addEventListener('keyup', () => {
    var value = searchBar.value.toLowerCase();

    // clear results
    while (results.firstChild) {
      results.removeChild(results.lastChild);
    }

    // search data for potential matches
    for (var i in testData) {
      if (testData[i].toLowerCase().includes(value) && value.length >= 3) {
        // this seems clunky
        var li = document.createElement('li');
        li.innerHTML = testData[i];
        results.appendChild(li);
      }
    }
  });
});