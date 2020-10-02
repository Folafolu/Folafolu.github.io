// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 25;
let cellSize;
let characterX = 0;
let characterY = 0;


function preload(){
  grid = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //loop through the whole 2d array, and turn everything to numbers
  for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
      grid[y][x] = int(grid[y][x]);
    }
  }

  //place player
  grid[characterY][characterX] = 9;

  // convert grid to 2d array
  for(let i = 0; i< grid.length; i++){
    grid[i] = grid[i].split(",");
  }

  if(width < height){
    cellSize = width/ GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
  
}


function displayGrid(){
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++) {
      if(grid[y][x] === 0){
        fill("black");
      }
      else if(grid[y][x] === 9){
        fill("white");
      }
      else{
        fill("red");
      }
      rect(cellSize*x, cellSize*y, cellSize, cellSize);
    }

  }
}


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
// function generateEmptyGrid(GRIDSIZE) {
//   let grid = [];
//   for (let i = 0; i< GRIDSIZE; i++){
//     grid.push([1]);
//     for (let j = 0; j< GRIDSIZE; j++){
//       grid[i].push(0);
//     }
//   }
//   return grid;
// }

// function boxMove(){
//   fill("black");
//   rect(0, 0, cellWidth, cellHeight);
// }