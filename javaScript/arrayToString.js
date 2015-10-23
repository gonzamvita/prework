var names;
names = [ "Canada", "Mexico", "Turkey", "Japan" ];

function prepare (array) {
  var string = "";

  for (var i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      string += "and " + array[i];
    } else {
      string += array[i] + ", ";
    }
  }
  return string;
};

// Should print "Canada, Mexico, Turkey and Japan"
console.log(prepare(names));
