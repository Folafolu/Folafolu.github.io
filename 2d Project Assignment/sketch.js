// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 10;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/GRIDSIZE;
  cellHeight = height/GRIDSIZE;
}

function draw() {
  background(220);
  displayGrid();
  boxMove();
}


function displayGrid(){
  
  for(let y = 0; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++) {
      
      fill("white");
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }

  }
}



function generateEmptyGrid(GRIDSIZE) {
  let grid = [];
  for (let i = 0; i< GRIDSIZE; i++){
    grid.push([1]);
    for (let j = 0; j< GRIDSIZE; j++){
      grid[i].push(0);
    }
  }
  return grid;
}

function boxMove(){
  fill("black");
  rect(0, 0, cellWidth, cellHeight);
  