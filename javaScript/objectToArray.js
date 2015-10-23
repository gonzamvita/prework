var country;

country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

function objectToArray (country) {
  names = [];

  for (key in country) {
    names.push(country[key])
  }

  return names;
};

// Should print [ "Uruguay", "South America", "Montevideo" ]
console.log(objectToArray(country));
