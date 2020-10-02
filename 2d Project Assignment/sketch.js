// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 25;
let cellSize;


function preload(){
  grid = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // convert grid to 2d array
  for(let i = 0; i< grid.length; i++){
    grid[i] = grid[i].split(",");
  }

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
  //character();
}


function displayGrid(){
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++) {
      if(grid[y][x] === "0"){
        fill("black");
      }
      else{
        fill("red");
      }
      rect(cellSize*x, cellSize*y, cellSize, cellSize);
    }

  }
}


// function character(){

// }
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