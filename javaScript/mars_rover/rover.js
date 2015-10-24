//The Rover
var myRover = {
  position: [0,0],
};

//Creating the "planet"
var grid = new Array(9);

for (var i = 0; i < 10; i++) {
  grid[i] = [null,null,null,null,null,null,null,null,null,null];
}

//Now I will put some rocks on the grid that must be detected by the rover
grid[1][1] = "rock"
grid[2][4] = "rock"
grid[3][7] = "rock"
grid[8][6] = "rock"
grid[5][5] = "rock"
grid[7][9] = "rock"

console.log(grid);

function goForward(rover) {
  if ((rover.position[0]+1)>9) {
    rover.position[0] = 0;
  }else{
    rover.position[0]++
  };

  if (check(rover)) {
    msg = problem(rover);
    rover.position[0]--
    return msg;
  }else{
    return true;
  }
}

function goBackward(rover){
  if ((rover.position[0]-1)<0) {
    rover.position[0] = 9;
  }else{
    rover.position[0]--
  };

  if (check(rover)) {
    rover.position[0]++
    return problem(rover);
  }else{
    return true;
  }
}

function turnRight(rover){
  if ((rover.position[1]+1)>9) {
    rover.position[1] = 0;
  }else{
    rover.position[1]++
  };

  if (check(rover)) {
    rover.position[1]--;
    return problem(rover);
  }else{
    return true;
  }
}

function turnLeft(rover){
  if ((rover.position[1]-1)<0) {
    rover.position[1] = 9;
  }else{
    rover.position[1]--
  };

  if (check(rover)) {
    rover.position[1]++;
    return problem(rover);
  }else{
    return true;
  }
}

function drivingSeat(rover, grid){
  //first I remove the rover from the grid
  for (var i = 0; i <=9; i++) {
    for (var j = 0; j <= 9; j++) {
      if (typeof(grid[i][j]) == typeof(rover)) {
        grid[i][j] = null;
      };
    };
  };

  //asking for the movement
  var question = prompt('Where should be go now? \n \'f\':forward \n \'b\':backward \n \'r\':right \n \'l\':left\nYou can combine them as much as you want! i.e. ffbbrrllrr')

  var movement = question.toLowerCase().split('');
  debugger;
  for (var i = 0; i <= movement.length - 1; i++) {
    switch(movement[i]){
      case 'f':
        move = goForward(rover);
        if (move == true) {
          console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
        }else{
          return alert(move);
        };

      case 'b':
        move = goBackward(rover);
        if (move == true) {
          console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
        }else{
          return alert(move);
        };

      case 'r':
        move = turnRight(rover);
        if (move == true) {
          console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
        }else{
          return alert(move);
        };

      case 'l':
        move = turnLeft(rover);
        if (move == true) {
          console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
        }else{
          return alert(move);
        };
    }
  }

  var x = rover.position[0];
  var y = rover.position[1];

  if (grid[x][y] == null) {
    grid[x][y] = rover;
  };
}

function problem(rover){
  var x = rover.position[0];
  var y = rover.position[1];

  var problem = "There is a rock in (" + x + "," + y + ") and I have to stop.";
  return problem;
}

function check(rover){
  var x = rover.position[0];
  var y = rover.position[1];

  if (grid[x][y] == "rock") {
    return true;
  }else{
    return false;
  };
}

drivingSeat(myRover, grid);
