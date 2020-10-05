// Project Title
// FolaY
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 25;
let cellSize;
//x and y position of the character
let characterX = 1;
let characterY = 1;
// x and y position of the 2nd player
let playerX = 2;
let playerY = 2;

let lastTeleportTime = 0;
let teleportTime = 500;
let move = false;


function preload(){
  grid = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // convert grid to 2d array
  for(let i = 0; i< grid.length; i++){
    grid[i] = grid[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {
      grid[y][x] = int(grid[y][x]);
    }
  }

  //place character
  grid[characterY][characterX] = 9;
  grid[playerY][playerX] = 10;
  
  if(width < height){
    cellSize = windowWidth/ GRIDSIZE;
  }
  else{
    cellSize = windowHeight/GRIDSIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
  // movePlayer();
  
}


function displayGrid(){
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++) {
      if(grid[y][x] === 0){
        fill("white");
      }
      else if(grid[y][x] === 9){
        fill("red");
      }
      else if(grid[y][x] === 10){
        fill("blue");
        if (millis() > lastTeleportTime + teleportTime){
          move = !move;
          lastTeleportTime = millis();
          // if(!move){
          //   grid[playerY][playerX] = 0;
          //   if (grid[playerY+1][playerX-1] === 0){
          //     playerX +- random(grid.length);
          //      playerY += 1;
          //     grid[playerY][playerX] = 10;
          //   }
          // }
        }
      }
      else if(grid[y][x] === 1){
        fill("green");
      }
      rect(cellSize*x, cellSize*y, cellSize, cellSize);
    }

  }
}

// function movePlayer(){
//   if(grid[y][x] === 10){
//     if (millis() > lastTeleportTime + teleportTime){
//       move = !move;
//       lastTeleportTime = millis();
//     }
//     if(move){
//       playerX = random(grid[0][0]);
//       playerY = random(grid[0][0]);
//     }
//   }
// }

function keyPressed(){
  if(key === "w"){
    //move up
    if(grid[characterY-1][characterX] === 0){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY -= 1;
      grid[characterY][characterX] = 9; // set new location to red

    }
  }
  if(key === "s"){
    //move down
    if(grid[characterY+1][characterX] === 0){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY += 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
  }
  if(key === "d"){
    //move right
    if(grid[characterY][characterX+1] === 0){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX += 1;
      grid[characterY][characterX] = 9; // set new location to red }
    }
  }
  if(key === "a"){
    //move left
    if(grid[characterY][characterX-1] === 0){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX -= 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
  }
}