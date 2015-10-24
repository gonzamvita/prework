var myRover = {
  position: [0,0],
};

var grid = new Array(9);

for (var i = 0; i < 10; i++) {
  grid[i] = [null,null,null,null,null,null,null,null,null,null];
}

console.log(grid);

function goForward(rover) {
  rover.position[0]++
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

}

function goBackward(rover){
  rover.position[0]--;
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover){
  rover.position[1]++;
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover){
  rover.position[1]--;
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function drivingSeat(rover, grid){
  var question = prompt('Where should be go now? \n \'f\':forward \n \'b\':backward \n \'r\':right \n \'l\':left \nYou can combine them as much as you want! i.e. ffbbrrllrr')

  var movement = question.toLowerCase().split('');
  debugger;
  for (var i = 0; i <= movement.length - 1; i++) {
    switch(movement[i]){
      case 'f':
        goForward(rover);
      break;

      case 'b':
        goBackward(rover);
      break;

      case 'r':
        turnRight(rover);
      break;

      case 'l':
        turnLeft(rover);
      break;
    }
  }

  var x = rover.position[0];
  var y = rover.position[1];

  if (grid[x][y] == null) {
    grid[x][y] = rover;
  };
}

drivingSeat(myRover, grid);
